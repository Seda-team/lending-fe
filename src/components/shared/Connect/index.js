import {useState, useContext, useEffect} from 'react'
import { Button, Box, Typography, Paper } from '@mui/material'
import { GlobalContext } from '../../context/GlobalState'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { sepolia_rpc } from '../constant/constant';
import Web3 from "web3"

const Connect = () => {
  const {updateConnect, connect, updateAddress, address, updateWeb3, web3} = useContext(GlobalContext)
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (window.ethereum) {
      const web3 = new Web3(sepolia_rpc);
      updateWeb3(web3)
      // Listen update account
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length === 0) {
          updateAddress(null);
          updateConnect(false)
        } else {
          updateAddress(accounts[0]);
          web3.eth.getBalance(accounts[0])
            .then((balance) => {
              console.log(web3.utils.fromWei(balance, 'ether'))
            })
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
        const balanceInWei = await web3.eth.getBalance(account);
        const balanceInEther = web3.utils.fromWei(balanceInWei, 'ether');
        console.log(balanceInEther)
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