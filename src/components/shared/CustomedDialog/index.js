import React, {useState, useEffect, useContext}from 'react'
import {
  Button,
  Dialog,
  Box,
  DialogContent,
  DialogTitle,
  Typography,
  TextField
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import NumberInput from '../NumberInput';
import InformationRow from '../InformationRow';
import DoneDialog from '../DoneDialog';
import Web3 from 'web3';
import { createContract } from '../utils/contract';
import LendingPoolV2 from "../../../abi/LendingPoolV2.json"
import { LENDING_CONTRACT_ADDRESS, ORACLE_CONTRACT_ADDRESS, SERVER } from '../constant/constant';
import { GlobalContext } from '../../context/GlobalState';
import CreditOracleAbi from "../../../abi/CreditOracleAbi.json"
import BigNumber from 'bignumber.js';
import { fetchData } from '../utils/others';
import { withdraw } from '../utils/others';
import { toDayTime } from '../utils/time';

const CustomedDialog = ({open, handleClose, title, info, requirement, packageIndex}) => {
  const { address, refresh, updateRefresh } = useContext(GlobalContext)
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("0");
  const [openDone, setOpenDone] = useState(false);
  const [isProved, setIsProved] = useState(false)
  const [proof, setProof] = useState("")
  const [result, setResult] = useState(null)
  const [lendingContract, setLendingContract] = useState(null)

  useEffect(() => {
    const web3 = new Web3(window.ethereum)
    createContract(web3, LendingPoolV2.abi, LENDING_CONTRACT_ADDRESS)
      .then(contract => {
        setLendingContract(contract)
      })
  }, [])

  const handleVerify = async () => {
    const web3 = new Web3(window.ethereum)
    const CreditOracle_contract = await createContract(web3, CreditOracleAbi, ORACLE_CONTRACT_ADDRESS)
    const res = await withdraw(proof, CreditOracle_contract, address, web3)
    if(res === true) {
      fetchData({ public_key: address, proof: proof }, SERVER + '/userProof/getProof')
        .then(data => {
          console.log(data)
          setResult(data)
          fetchData({ public_key: address, proof: proof }, SERVER + '/userProof/updateStatus')
            .then(data => setResult(data))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
      setIsProved(true)
    } else {
      fetchData({ public_key: address, proof: proof }, SERVER + '/userProof/getProof')
        .then(data => {
          setResult(data)
        })
        .catch(err => console.log(err))
      setIsProved(true)
    }
  }

  const borrow = async ( ) => {
    setLoading(true)
    try {
      await lendingContract.methods.borrow(BigNumber(value).multipliedBy(1000000000000000000), packageIndex).send({from: address})
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    } catch (err) {
      console.log(err)
    }
    updateRefresh(!refresh)
    setLoading(false)
  }

  useEffect(() => {
    if(requirement === "") {
      setIsProved(true)
    }
  }, [])

  const handleOpenDone = async () => {
    setLoading(true)
    await borrow()
    setOpenDone(true)
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

  const handleProvide = () => {
    setIsProved(true)
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
        <Typography variant="h4" sx={{fontSize: "20px", fontWeight: 800}}>{title}</Typography>
      </DialogTitle>
      <CloseIcon
        sx={{ position: "absolute", top: "20px", right: "20px" }}
        onClick={loading ? "" : handleCloseDialog}
      />
    <DialogContent>
        <Box
          sx={{
            justifyContent: "space-between",
            width: "90%",
            margin: "0 5%",
            marginTop: "20px",
          }}
        >
          {result && !loading && requirement.length === 0 || isProved ? 
            <Box>
              {isProved ? <Box>
              <Typography variant="h4" sx={{fontSize: "15px", fontWeight: 500}} mb={2}>
                Your proof is confirmed with the following information:
              </Typography> 
              <Box>
                {result ? <Box> 
                  <Box sx={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                    <FiberManualRecordIcon sx={{fontSize: "10px", marginLeft: "20px", marginRight: "10px"}}/>
                    <Typography sx={{fontSize: "15px", fontWeight: "800 "}}>Proof: {result.proof}</Typography>
                  </Box> 
                  <Box sx={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                    <FiberManualRecordIcon sx={{fontSize: "10px", marginLeft: "20px", marginRight: "10px"}}/>
                    <Typography sx={{fontSize: "15px", fontWeight: "800 "}}>Owner: {result.public_key}</Typography>
                  </Box> 
                  <Box sx={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                    <FiberManualRecordIcon sx={{fontSize: "10px", marginLeft: "20px", marginRight: "10px"}}/>
                    <Typography sx={{fontSize: "15px", fontWeight: "800 "}}>Balance: {result.balance}</Typography>
                  </Box> 
                  <Box sx={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                    <FiberManualRecordIcon sx={{fontSize: "10px", marginLeft: "20px", marginRight: "10px"}}/>
                    <Typography sx={{fontSize: "15px", fontWeight: "800 "}}>Amount: {result.amount}</Typography>
                  </Box> 
                  <Box sx={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                    <FiberManualRecordIcon sx={{fontSize: "10px", marginLeft: "20px", marginRight: "10px"}}/>
                    <Typography sx={{fontSize: "15px", fontWeight: "800 "}}>Liquidation: {result.liquidation}</Typography>
                  </Box> 
                  <Box sx={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                    <FiberManualRecordIcon sx={{fontSize: "10px", marginLeft: "20px", marginRight: "10px"}}/>
                    <Typography sx={{fontSize: "15px", fontWeight: "800 "}}>Created at: {toDayTime(result.timestamp)}</Typography>
                  </Box> 
                  </Box>: "" }
              </Box> </Box>: ""}
              <Typography variant="h4" sx={{fontSize: "15px", fontWeight: 500}} mb={2}>
                Please enter the amount you want to borrow
              </Typography>
            </Box>  : 
            <Box> 
              <Typography variant="h4" sx={{fontSize: "15px", fontWeight: 500}} mb={2}>
                You are using {title} with requirement:
              </Typography> 
              <Box>
                {requirement.map(data => (
                  <Box sx={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                    <FiberManualRecordIcon sx={{fontSize: "10px", marginLeft: "20px", marginRight: "10px"}}/>
                    <Typography sx={{fontSize: "15px", fontWeight: "800 "}}>{data}</Typography>
                  </Box>
                ))}
              </Box>
              <Typography variant="h4" sx={{fontSize: "15px", fontWeight: 500}} mb={2}>
                Please provide your proof first!
              </Typography> 
              <TextField sx={{margin: "0 auto", marginBottom: "10px", width: "400px"}} id="outlined-basic" label="Proof" helperText="Enter your proof" 
                value={proof}
                onChange={(e) => setProof(e.target.value)} />
            </Box>
            }
            
        </Box>
     
        {requirement.length === 0 || isProved ? <Box>
          
          <NumberInput
            value={value}
            setValue={loading ? "" : setValue}
            unitText={"USDT"}
            disabled={false}
          />
          <InformationRow title="Estimate Tx Fee" value="0.0005 USDT" bold={true}/>
        </Box> : <Box>
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
            onClick={handleVerify}
          >
            {loading ? <RestartAltIcon /> : "Provide Proof"} <img id="image" src="logo2.png"/>
          </Button>
        </Box>}
      </DialogContent>
      {requirement.length === 0 || isProved ?  <DialogContent>
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
      </DialogContent> : ""}
      {loading ? "" : <DoneDialog open={openDone} handleClose={handleCloseDone} info={[["Borrow", value], ["Transaction Fee", "0.0005 USDT"]]}/>}
  </Dialog>  
  )
}

export default CustomedDialog