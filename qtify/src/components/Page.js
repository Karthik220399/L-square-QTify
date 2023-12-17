import React from "react";
import Header from './Header';
import Herosection from './Herosection';
import Section from "./Section"
import { useState, useEffect } from "react";


export default function Page(){

   const [data, setData]  = useState([])

   useEffect(()=>{
      performApiCall();
   },[])

   const performApiCall = async() =>{
    try{
        const response = await fetch("https://qtify-backend-labs.crio.do/albums/top")
        const data = await response.json()
        setData(data)
    }catch(error){
        console.log(error);
    }   
   }

    return(
        <div>
            <Header/>  
            <Herosection/>
            <Section title="Top Albums" albumData={data}/>
      </div>
    )
}