import { useContext, useState, useEffect } from "react";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import Connect from "./components/shared/Connect";
import Deposit from "./components/Deposit";
import Borrow from "./components/Borrow";
import History from "./components/History";
import Dashboard from "./components/DashBoard";
import { GlobalContext } from "./components/context/GlobalState";
import Web3 from "web3"
import { SEPOLIA_RPC, USDT_CONTRACT_ADDRESS } from './components/shared/constant/constant';
import { createContract } from './components/shared/utils/contract';
import StableToken from "./abi/StableToken.json"


function Main() {
  const {updateWeb3, updateUsdtContract} = useContext(GlobalContext)

  useEffect(() => {
    try {
      const web3 = new Web3(SEPOLIA_RPC);
      updateWeb3(web3)
      // Update usdt contract
      createContract(web3, StableToken.abi, USDT_CONTRACT_ADDRESS)
        .then((contract) => {
          updateUsdtContract(contract)
        })
    } catch(err) {
      console.log('MetaMask is not installed');
    }
  }, [])

  const [curNav, setCurNav] = useState("DEPOSIT");
  const handleChangeNav = (nav) => {
    setCurNav(nav);
  };


  return (
    <div className="App">
      <Box
        sx={{
          width: "100%",
          // backgroundColor: "#000000",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        pt={2}
      >
        <Typography
          variant="h2"
          sx={{ color: "#fff", fontsize: "80px", fontWeight: 800 }}
        >
          SeDa Lending
        </Typography>
      </Box>
      <Dashboard/>
      <Box
        pt={3}
        sx={{
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ButtonGroup
          sx={{
            background: "#fff",
            borderRadius: "20px",
            border: "1px solid #fff",
            boxShadow: "0 0 10px #265D97"
          }}
        >
          <Button
            sx={
              curNav === "DEPOSIT"
                ? {
                    borderRadius: "20px",
                    background: "#265D97",
                    color: "#fff",
                    width: "200px",
                    border: "1px solid #fff",
                    fontSize: "20px",
                    fontWeight: 800,
                    "&:hover": {
                      background: "#265D97",
                      color: "#fff",
                      border: "0px solid #fff",
                    },
                  }
                : {
                    borderRadius: "20px",
                    width: "200px",
                    border: "1px solid #fff",
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#265D97",
                    "&:hover": {
                      background: "#265D97",
                      color: "#fff",
                      border: "0px solid #fff",
                    },
                  }
            }
            onClick={() => handleChangeNav("DEPOSIT")}
          >
            DEPOSIT
          </Button>
          <Button
            sx={
              curNav === "BORROW"
                ? {
                    borderRadius: "20px",
                    background: "#265D97",
                    color: "#fff",
                    width: "200px",
                    border: "1px solid #fff",
                    fontSize: "20px",
                    fontWeight: 800,
                    "&:hover": {
                      background: "#265D97",
                      color: "#fff",
                      border: "0px solid #fff",
                    },
                  }
                : {
                    borderRadius: "20px",
                    width: "200px",
                    border: "1px solid #fff",
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#265D97",
                    "&:hover": {
                      background: "#265D97",
                      color: "#fff",
                      border: "0px solid #fff",
                    },
                  }
            }
            onClick={() => handleChangeNav("BORROW")}
          >
            BORROW
          </Button>
          <Button
            sx={
              curNav === "HISTORY"
                ? {
                    borderRadius: "20px",
                    background: "#265D97",
                    color: "#fff",
                    width: "200px",
                    border: "1px solid #fff",
                    fontSize: "20px",
                    fontWeight: 800,
                    "&:hover": {
                      background: "#265D97",
                      color: "#fff",
                      border: "0px solid #fff",
                    },
                  }
                : {
                    borderRadius: "20px",
                    width: "200px",
                    border: "1px solid #fff",
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#265D97",
                    "&:hover": {
                      background: "#265D97",
                      color: "#fff",
                      border: "0px solid #fff",
                    },
                  }
            }
            onClick={() => handleChangeNav("HISTORY")}
          >
            HISTORY
          </Button>
        </ButtonGroup>
        <Connect/>
      </Box>
      {curNav === "DEPOSIT" ? <Deposit/> : ""}
      {curNav === "BORROW" ? <Borrow/> : ""}
      {curNav === "HISTORY" ? <History/> : ""}
    </div>
  );
}

export default Main;
