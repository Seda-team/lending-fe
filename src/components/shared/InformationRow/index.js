import React from 'react'
import { Box, Typography } from '@mui/material'

const InformationRow = ({title, value, bold}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "90%",
        margin: "0 5%",
        marginTop: "20px",
        }}
    >
      <Typography sx={bold ? { fontSize: "15px", fontWeight: 800 } : { fontSize: "15px", fontWeight: 500 }} mr={1}>
        {title}
      </Typography>
    <Typography sx={{ fontSize: "15px" }}>{value}</Typography>
  </Box>
  )
}

export default InformationRow