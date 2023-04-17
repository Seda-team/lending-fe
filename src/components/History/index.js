import React from 'react'
import { Container, Box, Typography, Paper, Grid } from "@mui/material";
import HistoryRow from './HistoryRow';

const History = () => {
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
                BORROW HISTORY
              </Typography>
            </Box>
            <Paper
              sx={{
                backgroundColor: "white",
                borderRadius: "15px",
                padding: "10px",
                marginTop: "15px"
              }}
              elevation={1}
            >
              <Grid container sx={{padding: "10px", borderBottom: "solid 2px #265D97"}}>
                <Grid item xs={2}>
                  <Typography  
                  variant="body2"
                  sx={{ fontSize: "17px", fontWeight: 800, color: "#265D97"}}
                  textAlign={"center"}
                  >
                    Package Type
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography  
                  variant="body2"
                  sx={{ fontSize: "17px", fontWeight: 800, color: "#265D97"}}
                  textAlign={"center"}
                  >
                    Date
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography  
                  variant="body2"
                  sx={{ fontSize: "17px", fontWeight: 800, color: "#265D97"}}
                  textAlign={"center"}
                  >
                    LTV
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography  
                  variant="body2"
                  sx={{ fontSize: "17px", fontWeight: 800, color: "#265D97"}}
                  textAlign={"center"}
                  >
                    LT
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography  
                  variant="body2"
                  sx={{ fontSize: "17px", fontWeight: 800, color: "#265D97"}}
                  textAlign={"center"}
                  >
                    Amount
                  </Typography>
                </Grid>
              </Grid>
              <HistoryRow type={"Default Package"} date={"15/04/2023"} ltv={60} lt={110} amount={100}/>
              <HistoryRow type={"Default Package"} date={"15/04/2023"} ltv={60} lt={110} amount={500}/>
              <HistoryRow type={"Package 1"} date={"10/04/2023"} ltv={70} lt={120} amount={200}/>
              <HistoryRow type={"Package 2"} date={"05/04/2023"} ltv={80} lt={125} amount={800}/>
            </Paper>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}

export default History