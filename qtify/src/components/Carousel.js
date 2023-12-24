import { Navigation } from 'swiper';
import React, {useEffect} from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from "./Carousel.module.css";
import Card from "./Card"
import LeftButton from './LeftButtons';
import RightButton from './RightButton';

import 'swiper/css';
import 'swiper/css/navigation';


// const Controls = ({data}) =>{
//   const swiper = useSwiper();
//   useEffect(()=>{
//        swiper.slideTo(0);
//   },[data])
//   return <></>;
// }
 function Carousel ({cdata, type}) {
  console.log("c",cdata)
  return (
    <div className={styles.wrapper}>
     <Swiper
      style={{padding: "0px 20px" }}
      initialSlide={0}
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={"auto"}
      allowTouchMove
    >
       {/* <Controls data={cdata}/> */}
      <LeftButton />
      <RightButton/>
      {cdata.map((ite)=>(
             <SwiperSlide> <Card data={ite} type={type} /> </SwiperSlide>
      ))}
    </Swiper> 
    </div>
  );
};

export default Carousel;