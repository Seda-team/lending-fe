import React, {useContext, useEffect} from "react"
import { Container, Box, Paper, Typography } from "@mui/material";
import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Dashboard = () => {
  const totalDeposit = 1000
  const totalBorrow = 2000
  
  return (
    <Box sx={{paddingTop: "20px"}}>
    <Container>
        <Paper
            sx={{
            width: "70%",
            height: "170px",
            backgroundColor: "#E8E8E8",
            borderRadius: "15px",
            boxShadow: "0 0 10px #265D97",
            position: "relative",
            display: "flex",
            margin: "0 auto",
            justifyContent: "space-between"
            }}
            elevation={1}
        >
            <PieChart highcharts={Highcharts} options={ {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        width: 150,
        height: 130,
        backgroundColor: null,
    },
    title: "",
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            innerSize: '70%',
            label: {
                connectorAllowed: false,
            },
        }
        
    },
    series: [{
        name: 'Value',
        colorByPoint: true,
        data: [{
            name: 'Total Deposit',
            color: "#265D97",
            y: totalDeposit
        }, {
            name: 'Total Borrow',
            y: totalBorrow
        }]
    }],
    credits: {
        enabled: false
      },
  }} className="pie" />
            <Paper
                sx={{
                backgroundColor: "#F8F8F8",
                borderRadius: "15px",
                padding: "10px",
                width: "250px",
                height: "120px",
                display: "flex",
                margin: "auto 0",
                flexDirection: "column",
                justifyContent: "space-between",
                }}
                elevation={1}
            >
                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <Box sx={{display: "flex", alignItems: "center"}}> 
                        <FiberManualRecordIcon sx={{color: "#265D97", fontSize: "20px"}}/>
                        <Typography ml={1} sx={{color: "black", fontSize: "15px"}}>Total Deposit</Typography>
                    </Box>
                    <Typography sx={{color: "black", fontWeight: "800", fontSize: "30px", width: "100%", textAlign: "center", marginTop: "8px"}}>1000 ETH</Typography>  
                </Box>
            </Paper>
            <Paper
                sx={{
                backgroundColor: "#F8F8F8",
                borderRadius: "15px",
                padding: "10px",
                width: "250px",
                height: "120px",
                display: "flex",
                margin: "auto 0",
                marginRight: "40px",
                flexDirection: "column",
                justifyContent: "space-between",
                }}
            >
                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <Box sx={{display: "flex", alignItems: "center"}}> 
                        <FiberManualRecordIcon sx={{color: "black", fontSize: "20px"}}/>
                        <Typography ml={1} sx={{color: "black", fontSize: "15px"}}>Total Borrow</Typography>
                    </Box>
                    <Typography sx={{color: "black", fontWeight: "800", fontSize: "30px", width: "100%", textAlign: "center", marginTop: "8px"}}>2000 USDT</Typography>  
                </Box>     
            </Paper>      
        </Paper>
    </Container>
    </Box>
  ) 
}

export default Dashboard