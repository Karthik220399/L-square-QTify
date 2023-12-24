import React, { useEffect, useState } from "react";
import styles from "./LeftButton.module.css"
import { useSwiper } from "swiper/react";

import { ReactComponent as LeftArrow } from "../assets/PrevIcon.svg";




export default function LeftButton (){

  const swiper = useSwiper();
  const[isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(()=>{
      swiper.on("slideChange",function(){
        setIsBeginning(swiper.isBeginning)
      })
  },[])
  return (
   <div className={styles.LeftArrow}>
      {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()}/>}
   </div>
   
  )
}