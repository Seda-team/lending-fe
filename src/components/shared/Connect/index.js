import {useState, useContext, useEffect} from 'react'
import { Button, Box, Typography, Paper } from '@mui/material'
import { GlobalContext } from '../../context/GlobalState'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { SEPOLIA_RPC, USDT_CONTRACT_ADDRESS, BASE_18 } from '../constant/constant';
import { createContract } from '../utils/contract';
import StableToken from "../../../abi/StableToken.json"
import BigNumber from "bignumber.js"
import Web3 from "web3"

const Connect = () => {
  const {updateConnect, connect, updateAddress, address, updateWeb3, web3, balance, updateBalance, usdtContract, updateUsdtContract} = useContext(GlobalContext)
  const [open, setOpen] = useState(false)
  const [curContract, setCurContract] = useState(null)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (window.ethereum) {
      const web3 = new Web3(SEPOLIA_RPC);
      updateWeb3(web3)

      createContract(web3, StableToken.abi, USDT_CONTRACT_ADDRESS)
        .then((contract) => {
          updateUsdtContract(contract)
          setCurContract(contract)
        })
      
      // Listen update account
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length === 0) {
          updateAddress(null);
          updateConnect(false)

        } else {
          updateAddress(accounts[0]);
          // Update ether balance 
          let newBalance = balance
          web3.eth.getBalance(accounts[0])
            .then((_balance) => { 
              newBalance.ether = web3.utils.fromWei(_balance, 'ether')
            })
          let contract = curContract ? curContract : usdtContract
          // Update USDT balance
          contract.methods.balanceOf(address).call()
          .then((receipt) => {
            newBalance.usdt = receipt
          })
          .catch((err) => {
            console.error(err);
          });
          updateBalance(newBalance)
        }
      });
    } else {
      console.log('MetaMask is not installed');
    }
  }, [])

  const handleConnect = async () => {
    if(web3) {
      await window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(async (accounts) => {
          const account = accounts[0];
          updateAddress(account)
          // Update ETH balance
          let newBalance = balance
          await web3.eth.getBalance(account)
            .then((_balance) => {
              newBalance.ether = web3.utils.fromWei(_balance, 'ether')
            })

          // Update USDT balance
          let contract = curContract ? curContract : usdtContract
          await contract.methods.balanceOf(account).call()
            .then((receipt) => {
              newBalance.usdt = BigNumber(receipt).dividedBy(BASE_18).toFixed()
            })
          updateBalance(newBalance)
      }).catch((error) => {
        console.log(error);
      });
      updateConnect(true)
    }
    else {
      console.log('MetaMask is not installed');
    }
  }
  return (
    <Box>
      {connect ? <Box sx={{
          backgroundColor: "#DCDCDC",
          color: "black",
          borderTop: "0 px solid white",
          borderRadius: "15px",
          textTransform: "none",
          width: "200px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "100px",
        }}> 
          <Typography sx={{
            fontSize: "15px",
            fontWeight: "800",}}
          >
              {address.slice(0, 15)} ...
          </Typography>
          <Box>
            <Box sx={{display: "flex", alignItems: "center"}}>
              {open ? <CloseIcon sx={{
                "&:hover": {
                  cursor: "pointer"
                }
              }}onClick={handleClose}/> : <MenuIcon  sx={{
                "&:hover": {
                  cursor: "pointer"
                }
              }} onClick={handleOpen}/> }
            </Box>
            <Box sx={open? {position: "absolute", marginTop: "5px"} : {display: "none"}}>            
              <Paper elevation={1} sx={{
                width: "100px",
                backgroundColor: "#1E90FF", 
                padding: "5px",
                "&:hover": {
                  cursor: "pointer"
                }}}
                >
                <Typography textAlign={"center"} variant="body2" sx={{color: "white", height: "20px", fontSize: "14px"}}>
                  My Credit Info
                </Typography>
              </Paper>  
              <Paper elevation={1} sx={{
                marginTop: "5px",
                width: "100px",
                backgroundColor: "#1E90FF", 
                padding: "5px",
                "&:hover": {
                  cursor: "pointer"
                }}}>
                <Typography textAlign={"center"} variant="body2" sx={{color: "white", height: "20px", fontSize: "14px"}}>
                  Log Out
                </Typography>
              </Paper>  
            </Box>
          </Box> 
        </Box>
      : 
      <Button
        sx={{
          backgroundColor: "#DCDCDC",
          color: "black",
          borderTop: "0 px solid white",
          borderRadius: "15px",
          textTransform: "none",
          width: "150px",
          height: "40px",
          fontSize: "16px",
          fontWeight: "800",
          marginLeft: "100px",
        }}
        onClick={handleConnect}
      >
        CONNECT
      </Button> } 
    </Box>
   
  )
}

export default Connect