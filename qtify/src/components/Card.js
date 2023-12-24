import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import styles from "./Card.module.css";
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';


export default function Albumcard ({data, type}){


  const getCard =(type) =>{
     switch (type){
      case "album":{
        const {image,title,follows,songs,slug} = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
        <Card  className={styles.cardWrapper} sx={{backgroundColor: "#121212"}}>
            <div className={styles.image}>
            <CardMedia
              sx={{ height: 170}}
              image={image}
              title={title}
            />
            <Chip className={styles.chip} size="small" label={`${follows} Follows`} color="primary" />
            </div>
            <p className={styles.cardTitle}>{title}</p>
        </Card>
        </Tooltip>
        )
        }
        case "songs":{
          const {image,title,likes} = data;
          return (
          <Card  className={styles.cardWrapper} sx={{backgroundColor: "#121212"}}>
              <div className={styles.image}>
              <CardMedia
                sx={{ height: 170}}
                image={image}
                title={title}
              />
              <Chip className={styles.chip} size="small" label={`${likes} Likes`} color="primary" />
              </div>
              <p className={styles.cardTitle}>{title}</p>
          </Card>
      
          )
          }
          default:{
            return <></>
          }
       }
      }
      
   
    return getCard(type);

  }

   