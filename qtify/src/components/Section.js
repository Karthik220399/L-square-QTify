import React from "react";
import styles from "./Section.module.css"
import Card from "./Card"
import Grid from '@mui/material/Grid';
import Carousel from "./Carousel";
import { useState, useEffect } from "react";


export default function Section({title,albumData,viewprop}){

    const [view, setView ] = useState("")

    useEffect(()=>{
        setView(viewprop)
    },[])

    const changeView =()=>{
        if(view === "Collapse"){
            setView("Show all")
        }else{
            setView("Collapse")
        }
    }

   return(
    <div className={styles.section}>
        <div className={styles.sectionHeader}>
            <p className={styles.sectionTitle}>{title}</p>
            <button className={styles.showButton} onClick={changeView}>{view}</button>
        </div>

    {view === "Collapse"?
     <Grid container spacing={3}>
       {albumData.map((ite)=>(
            <Grid item lg={1.7} md={3} sm={4} xs={6} key={ite.id}>
                <Card data={ite} type="album"/>
            </Grid>
       ))}
     </Grid> 

     :

     <Carousel cdata={albumData} type="album"/>
       }

    </div>
   )
}