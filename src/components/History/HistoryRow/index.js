import React from 'react'
import { Box, Typography, Grid, Button } from '@mui/material'

const HistoryRow = ({type, date, ltv, lt, amount}) => {
  return (
    <Box>
     <Grid container sx={{padding: "10px", marginTop: "15px"}}>
        <Grid item xs={2} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Typography  
            variant="body2"
            sx={{ fontSize: "15px", fontWeight: 1000}}
            textAlign={"center"}
          >
           {type}
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Typography  
            variant="body2"
            sx={{ fontSize: "15px", fontWeight: 1000}}
            textAlign={"center"}
          >
            {date}
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Typography  
            variant="body2"
            sx={{ fontSize: "15px", fontWeight: 1000}}
            textAlign={"center"}
          >
            {ltv}
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Typography  
            variant="body2"
            sx={{ fontSize: "15px", fontWeight: 1000}}
            textAlign={"center"}
        >
            {lt}
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Typography  
            variant="body2"
            sx={{ fontSize: "15px", fontWeight: 1000}}
            textAlign={"center"}
          >
            {amount} USDT
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Button
              sx={{
                color: "#E8E8E8",
                backgroundColor: "#909090",
                border: "1px solid #909090",
                borderRadius: "30px",
                textTransform: "none",
                width: "100px",
                fontSize: "15px",
                fontWeight: "800",
              }}
            >
              Repay
            </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HistoryRow