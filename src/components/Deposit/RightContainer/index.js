import { Paper, Box, Typography } from "@mui/material";

import React from 'react'

const RightContainer = () => {
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
              10.0%
            </Typography>
          </Box>
          <Box sx={{ padding: "70px 0" }}>
          </Box>
        </Paper>
      </Box>
    );
  }

export default RightContainer