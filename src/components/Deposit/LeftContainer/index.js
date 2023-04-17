import React, { useContext, useState, useEffect } from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { GlobalContext } from "../../context/GlobalState";
import BigNumber from "bignumber.js"

const LeftContainer = () => {
  const {balance} = useContext(GlobalContext)
  const [curBalance, setCurBalance] = useState({
    "ether": 0,
    "usdt": 0
  })
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    if(balance != undefined) {
      console.log(balance)
      setCurBalance(balance)
      setRefresh(!refresh)
    }
      
  }, [balance])

  return (
    <Box mb={5}>
      <Paper
        sx={{
          backgroundColor: "#E8E8E8",
          borderRadius: "15px",
          height: "300px",
          padding: "50px",
          boxShadow: "0 0 10px #265D97",
        }}
        elevation={1}
      >
        <Typography
          variant="body2"
          sx={{ fontWeight: "800", fontSize: "20px" }}
          mb={1}
        >
          TOTAL BALANCE
        </Typography>
        <Box sx={{display: "flex", justifyContent: "space-around"}} mb={4} mt={3}>
          <Paper
          sx={{
            backgroundColor: "#F8F8F8",
            borderRadius: "15px",
            padding: "30px",
            width: "30%",
            height: "70px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center"
          }}
          elevation={1}
        >
          <Typography
            variant="body2"
            sx={{ fontSize: "15px", fontWeight: 800 }}
            mr={1}
          >
            ETH
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "800", fontSize: "40px", color: "#265D97" }} mr={1}>
            {BigNumber(curBalance.ether).toFixed(2)}
          </Typography>
        </Paper>
        <Paper
          sx={{
            backgroundColor: "#F8F8F8",
            borderRadius: "15px",
            padding: "30px",
            width: "30%",
            height: "70px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center"
          }}
          elevation={1}
        >
          <Typography
            variant="body2"
            sx={{ fontSize: "15px", fontWeight: 800 }}
            mr={1}
          >
            USDT
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "800", fontSize: "40px" }} mr={1}>
          {BigNumber(curBalance.usdt).toFixed(2)}
          </Typography>
        </Paper>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            sx={{
              color: "#E8E8E8",
              backgroundColor: "#909090",
              border: "1px solid #909090",
              borderRadius: "30px",
              textTransform: "none",
              width: "200px",
              fontSize: "20px",
              fontWeight: "800",
              marginRight: "20px",
            }}
          >
            Deposit
          </Button>
          <Button
            sx={{
              color: "#909090",
              backgroundColor: "#E8E8E8",
              border: "1px solid #909090",
              borderRadius: "30px",
              textTransform: "none",
              width: "200px",
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            Withdraw
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default LeftContainer