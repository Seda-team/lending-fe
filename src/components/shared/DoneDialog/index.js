import React from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import InformationRow from "../InformationRow";

export default function DoneDialog({ open, handleClose, info }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      PaperProps={{
        padding: "100px",
        backgroundColor: "#DCDCDC",
        position: "relative",
        height: "500px"
      }}
    >
      <DialogTitle sx={{ textAlign: "center" }} mt={3}>
        <CheckCircleOutlineIcon sx={{fontSize: "150px", fontWeight: 200, color: "green"}} />
        <Typography variant="h5" sx={{fontWeight: 800}} >Complete!</Typography>
      </DialogTitle>
      <DialogContent>
        {info.map((data) => (
          <InformationRow title={data[0]} value={data[1]} bold={true}/>
        ))}
      </DialogContent>
      <DialogContent>
        <Button
          sx={{
            color: "white",
            backgroundColor: "black",
            border: "1px solid #909090",
            borderRadius: "20px",
            textTransform: "none",
            width: "90%",
            fontSize: "12px",
            fontWeight: "800",
            margin: "0 5%",
            padding: "12px 0",
            marginBottom: "20px",
          }}
          onClick={handleClose}
        >
          OK
        </Button>
      </DialogContent>
    </Dialog>
  );
}
