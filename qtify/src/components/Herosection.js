import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import styles from "./Herosection.module.css"
import heroimage from "../assets/vibratingheadphone.png"



export default function Herosection (){
   return (
   <Box className={styles.heroSection}>
       <Box className={styles.title}>
         <Typography   sx={{fontSize: {sm: 32, xs: 20 }, fontWeight: 600}}>100 Thousand Songs, ad-free</Typography>
         <Typography  sx={{fontSize: {sm: 32, xs: 20 }, fontWeight: 600}}>Over thousands podcast episodes</Typography>
       </Box>
       <Box className={styles.heroimage}>
          <img src={heroimage} alt="hero_image" />
       </Box>

    </Box>
   
   )
};