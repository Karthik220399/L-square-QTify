import React from "react";
import styles from "./Section.module.css"
import Card from "./Card"
import Grid from '@mui/material/Grid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { colors } from "@mui/material";

export default function Section({title,albumData}){


   
    //   const settings = {
    //     dots: false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 7,
    //     slidesToScroll: 7,
    //   };

   return(
    <div className={styles.section}>
        <div className={styles.sectionHeader}>
            <p className={styles.sectionTitle}>{title}</p>
            <button className={styles.showButton}>Collpase</button>
        </div>
     <Grid container spacing={3}>
       {albumData.map((ite)=>(
            <Grid item lg={1.7} md={3} sm={4} xs={6} key={ite.id}>
                <Card image={ite.image} title={ite.title} follows={ite.follows}/>
            </Grid>
       ))}
     </Grid> 

       {/* <Slider {...settings} >
        {albumData.map((ite)=>(     
                <Card image={ite.image} title={ite.title} follows={ite.follows}/>
       ))}
       </Slider> */}

    </div>
   )
}