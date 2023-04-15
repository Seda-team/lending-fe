import {useContext, useEffect} from 'react'
import { Button, Box, Typography } from '@mui/material'
import { GlobalContext } from '../../context/GlobalState'
import Web3 from "web3"

const Connect = () => {
  const {updateConnect, connect, updateAddress, address, updateWeb3, web3} = useContext(GlobalContext)

  useEffect(() => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      updateWeb3(web3)
    } else {
      console.log('MetaMask is not installed');
    }
  }, [])

  const handleConnect = async () => {
    if(web3) {
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        const account = accounts[0];
        updateAddress(account)
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