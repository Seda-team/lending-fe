import React, { useState, useEffect } from 'react'
import { Box, Paper, Typography, Button } from '@mui/material'
import CustomedDialog from '../../shared/CustomedDialog'
import Web3 from 'web3'
import { LENDING_CONTRACT_ADDRESS } from '../../shared/constant/constant'
import LendingPoolV2 from "../../../abi/LendingPoolV2.json"
import { createContract } from '../../shared/utils/contract'

const Package = ({name, requirement, ltv, threshold, packageIndex}) => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <Box> 
      <Paper
          sx={{
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "30px",
            height: "180px"
          }}
          elevation={1}
        >
          <Typography 
            variant="body2"
            sx={{ fontSize: "17px", fontWeight: 800 }}
            mr={1}>
            {name}
          </Typography>
          <Box mt={2} sx={{display: "flex", justifyContent: "space-around"}}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Typography
                variant="body2"
                sx={{ fontSize: "20px", fontWeight: 800, color: "#265D97" }}
                mr={1}>
                LTV
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "40px", fontWeight: 600 }}
                mr={1}>
                {ltv}
              </Typography>
            </Box>
            <Box ox sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Typography
                variant="body2"
                sx={{ fontSize: "20px", fontWeight: 800, color: "#265D97" }}
                mr={1}>
                LT
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "40px", fontWeight: 600 }}
                mr={1}>
                {threshold}
              </Typography>
            </Box>
          </Box>
          {requirement[0] === "" ? 
             <Box sx={{display: "flex", justifyContent: "flex-end"}} mt={1}>
              <Typography
                variant="body2"
                sx={{ fontSize: "10x", fontWeight: 500, color: "#265D97" }}
                mr={1}>
                * No requirement
              </Typography>
            </Box> :
            <Box sx={{display: "flex", justifyContent: "center"}} mt={1}>
              <Typography
                variant="body2"
                sx={{ fontSize: "10x", fontWeight: 500, color: "#265D97" }}
                mr={1}>
                Requirement: 
              </Typography>

              <Box>
                {requirement.length > 0 ?<Box> {requirement.map(data => (
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "10x", fontWeight: 500 }}
                    mr={1}>
                    {data}
                  </Typography>
                ))} </Box> :  <Typography
                  variant="body2"
                  sx={{ fontSize: "10x", fontWeight: 500 }}
                  mr={1}>
                  No requirement
                </Typography>}
                
                
              </Box>
              
            </Box>
            }
        </Paper>
        <Box sx={{display: "flex", justifyContent: "center", marginTop: "20px"}}> 
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
            }}
            onClick={() => handleOpen()}
          >
            Choose
          </Button>
          <CustomedDialog open={open} handleClose={handleClose} title={name} requirement={requirement} packageIndex={packageIndex}/>
        </Box>
        
    </Box>
  )
}

export default Package