import React, { useEffect, useState } from "react";
import styles from "./RightButton.module.css"
import { useSwiper } from "swiper/react";

import { ReactComponent as RightArrow } from "../assets/nextIcon.svg";




export default function RightButton (){

  const swiper = useSwiper();
  const[isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(()=>{
      swiper.on("slideChange",function(){
        setIsEnd(swiper.isEnd)
      })
  },[])
  return (
   <div className={styles.RightArrow}>
      {!isEnd && <RightArrow onClick={()=>swiper.slideNext()}/>}
   </div>
   
  )
}