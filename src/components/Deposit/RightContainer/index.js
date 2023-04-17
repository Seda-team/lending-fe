import { Paper, Box, Typography } from "@mui/material";
import { createContract } from "../../shared/utils/contract";
import { SEPOLIA_RPC, PRICE_ORACLE_CONTRACT_ADDRESS } from "../../shared/constant/constant"
import PriceConsumerV3 from "../../../abi/PriceConsumerV3.json"
import React, {useEffect, useState} from 'react'
import Web3 from "web3";
import BigNumber from "bignumber.js"

const RightContainer = () => {
  const [price, setPrice] = useState(0)
  useEffect(() => {
    if (window.ethereum) {
      const web3 = new Web3(SEPOLIA_RPC);
      createContract(web3, PriceConsumerV3.abi, PRICE_ORACLE_CONTRACT_ADDRESS)
        .then(contract => {
          contract.methods.getLatestPrice().call()
            .then(price => {
              setPrice(BigNumber(price).toFixed(2))
            })
            .catch((err) => {
              console.error(err);
            });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [])
  return (
      <Box sx={{marginLeft: "50px"}}>
        <Paper
          sx={{
            backgroundColor: "#E8E8E8",
            borderRadius: "15px",
            height: "300px",
            padding: "50px",
            boxShadow: "0 0 10px #265D97"
          }}
          elevation={1}
        >
          <Typography
            variant="body2"
            sx={{ fontWeight: "800", fontSize: "20px" }}
            mb={1}
          >
            INTEREST
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: "800",
                fontSize: "15px",
                backgroundColor: "white",
                width: "60px",
                padding: "2px 0",
                textAlign: "center",
                borderRadius: "10px",
                boxShadow: "1px 1px 1px 0px rgba(0,0,0,0.2)",
                filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.2))",
              }}
              mb={1}
            >
              APY
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: "800", color: "#265D97", fontSize: "40px" }}
              mb={1}
            >
              2.00%
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{ fontWeight: "800", fontSize: "20px" }}
            mb={2}
            mt={4}
          >
            CURRENT PRICE
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "800", color: "#265D97", fontSize: "30px" }}
              mb={1}
            >
              ETH = {BigNumber(price).dividedBy(100000000).toFixed(0)} USDT
            </Typography>
          </Box>
          <Box sx={{ padding: "70px 0" }}>
          </Box>
        </Paper>
      </Box>
    );
  }

export default RightContainer