import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import "./Herosection.css"
import heroimage from "../assets/vibratingheadphone.png"



export default function Herosection (){
   return (
    <div className="heroSection">
       <Box className="title">
         <Typography sx={{fontSize: {sm: 32, xs: 20 }}} fontWeight={600} >
            100 Thousand Songs, ad-free <br/> Over thousands podcast episodes
         </Typography>
         {/* <Typography sx={{fontSize: {sm: 32, xs: 20 }}} fontWeight={600} >
            Over thousands podcast episodes
         </Typography> */}
       </Box>
       <Box className="heroimage">
         <img src={heroimage} alt="hero_image" />
       </Box>

    </div>
   )
};