import React, {useState, useEffect, useContext}from 'react'
import {
  Button,
  Dialog,
  Box,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import NumberInput from '../../../shared/NumberInput';
import InformationRow from '../../../shared/InformationRow';
import DoneDialog from '../../../shared/DoneDialog';
import LendingPoolV2 from "../../../../abi/LendingPoolV2.json"
import { LENDING_CONTRACT_ADDRESS, SEPOLIA_RPC } from "../../../shared/constant/constant";
import { createContract } from "../../../shared/utils/contract";
import { GlobalContext } from '../../../context/GlobalState';
import BigNumber from "bignumber.js"
import Web3 from 'web3';

const DepositDialog = ({open, handleClose, title, info, requirement}) => {
  const {balance, web3, address} = useContext(GlobalContext)
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("0");
  const [openDone, setOpenDone] = useState(false);
  const [isProved, setIsProved] = useState(false)
  const [curLendingContract, setCurLendingContract] = useState(null)

  useEffect(() => {
    let web3Sep = new Web3(window.ethereum)
    createContract(web3Sep, LendingPoolV2.abi, LENDING_CONTRACT_ADDRESS)
      .then(contract => {
        setCurLendingContract(contract)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const deposit = async ( ) => {
    setLoading(true)
    const web3 = new Web3(window.ethereum)
    try {
      curLendingContract.methods.deposit(web3.utils.toWei(value)).send({from: address, value: web3.utils.toWei(value)})
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  const handleOpenDone = async () => {
    setOpenDone(true)
    setLoading(true) 
    await deposit()
    setLoading(false)
  }

  const handleCloseDone = () => {
    setOpenDone(false)
    handleCloseDialog()
  }

  const handleCloseDialog = () => {
    setValue("0");
    setIsProved(false)
    handleClose();
  }

  return (
    <Dialog
    open={open}
    onClose={loading ? "" : handleCloseDialog}
    fullWidth
    PaperProps={{
      padding: "100px",
      backgroundColor: "#DCDCDC",
      position: "relative",
    }}
  >
    <DialogTitle sx={{ textAlign: "center" }} mt={3}>
        <Typography sx={{fontSize: "20px", fontWeight: 800}}>{title}</Typography>
      </DialogTitle>
      <CloseIcon
        sx={{ position: "absolute", top: "20px", right: "20px" }}
        onClick={loading ? "" : handleCloseDialog}
      />
    <DialogContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            margin: "0 5%",
            marginTop: "20px",
          }}
        >
          <Typography sx={{fontSize: "15px", fontWeight: 500}} mb={2}>
            Please enter the amount you want to deposit:
          </Typography>  
        </Box>
     
        <Box>
          <NumberInput
            value={value}
            setValue={loading ? "" : setValue}
            unitText={"ETH"}
            disabled={false}
          />
          <InformationRow title="Estimate Tx Fee" value="0.0005 USDT" bold={true}/>
        </Box> 
      </DialogContent>
      <DialogContent>
        <Button
          sx={{
            color: "white",
            backgroundColor: loading ? "#E8E8E8" : "black",
            border: loading ? "1px solid #E8E8E8" : "1px solid #909090",
            borderRadius: "20px",
            textTransform: "none",
            width: "90%",
            fontSize: "20px",
            fontWeight: "800",
            margin: "0 5%",
            padding: "12px 0",
            marginBottom: "20px",
          }}
          onClick={handleOpenDone}
        >
          {loading ? <RestartAltIcon /> : "Proceed"}
        </Button>
      </DialogContent>
      <DoneDialog open={openDone} handleClose={handleCloseDone} info={[["Deposit", value], ["Transaction Fee", "0.0005 USDT"]]}/>
  </Dialog>  
  )
}

export default DepositDialog