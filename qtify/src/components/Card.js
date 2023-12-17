import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import styles from "./Card.module.css"
import Chip from '@mui/material/Chip';


export default function Albumcard ({image,title,follows}){
    return (
    <Card  className={styles.cardWrapper} sx={{backgroundColor: "#121212"}}>
        <div className={styles.image}>
        <CardMedia
          sx={{ height: 170}}
          image={image}
          title={title}
        />
        <Chip className={styles.chip} size="small" label={follows} color="primary" />
        </div>
        <p className={styles.cardTitle}>{title}</p>
    </Card>

    )
}