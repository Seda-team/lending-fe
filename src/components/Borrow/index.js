import React from 'react'
import Package from './Package';
import { Container, Box, Typography, Paper, Grid } from "@mui/material";

const Borrow = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        paddingTop: "20px",
      }}
    >
      <Container> 
        <Box mt={2}>
        <Paper
          sx={{
            backgroundColor: "#E8E8E8",
            borderRadius: "15px",
            padding: "50px",
            boxShadow: "0 0 10px #265D97",
          }}
          elevation={1}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            mb={5}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "800", fontSize: "20px" }}
              mb={1}
            >
              BORROW PACKAGES
            </Typography>
          </Box>
          <Grid container sx={{display: "flex", justifyContent: "space-around"}}>
            <Grid item xs={3}>
              <Package name={"Default Package"} requirement={[]} ltv={75} threshold={80} packageIndex={0}/>
            </Grid>
            <Grid item xs={3}>
              <Package name={"Package 1"} requirement={["Tx Amount > 2", "Liquidate < 3"]} ltv={77.5} threshold={82.5} packageIndex={1}/>
            </Grid>
            <Grid item xs={3}>
              <Package name={"Package 2"} requirement={["Balance > 1000", "Tx Amount > 2", "Liquidate < 3"]} ltv={80} threshold={85} packageIndex={2}/>
            </Grid>
          </Grid>
         
        </Paper>
        </Box>
      </Container>
    </Box>
  )
}

export default Borrow