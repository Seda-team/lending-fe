import React from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer';
import { Container, Box, Grid } from "@mui/material";

const Deposit = () => {
  return (
    <Box sx={{minHeight: "100vh", paddingTop: "20px"}}>
       <Container>
        <Box sx={{display: "flex", alignItems: "flex-end"}}>
        </Box>
        <Box mt={2}>
          <Grid container>
            <Grid item xs={7}>
              <LeftContainer/>
            </Grid>
            <Grid item xs={5}>
              <RightContainer/>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Deposit