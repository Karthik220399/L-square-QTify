import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import "./Herosection.css"
import heroimage from "../assets/vibratingheadphone.png"



export default function Herosection (){
   return (
      <Box className="heroSection">
       <Box className="title">
         <Typography fontSize={32}  fontWeight={600} >
            100 Thousand Songs, ad-free 
         </Typography>
         {/* sx={{fontSize: {sm: 32, xs: 20 }}} */}
         <Typography fontSize={32} fontWeight={600} >
            Over thousands podcast episodes
         </Typography>
       </Box>
       <Box className="heroimage">
         <img src={heroimage} alt="hero_image" />
       </Box>
    </Box>

   
   )
};