import React from "react";
import Header from './Header';
import Herosection from './Herosection';
import Section from "./Section"
import { useState, useEffect } from "react";



export default function Page(){

   const [topAlbumData, setTopAlbumsetData]  = useState([])
   const [newAlbumData, setNewAlbumsetData]  = useState([])

   useEffect(()=>{
    apiCall();
   },[])

   const apiCall = async()=>{
      const topdata = await performApiCall("https://qtify-backend-labs.crio.do/albums/top");
      setTopAlbumsetData(topdata);
      const newdata = await performApiCall("https://qtify-backend-labs.crio.do/albums/new");
      setNewAlbumsetData(newdata)
   }

   const performApiCall = async(url) =>{
    try{
        const response = await fetch(url)
        const data = await response.json()
        return data;
    }catch(error){
        console.log(error);
    }   
   }

    return(
        <div>
            <Header/>  
            <Herosection/>
            <Section title="Top Albums" albumData={topAlbumData} viewprop="Show all"/>
            {/* <hr color="#34c94b"/> */}
            <Section title="New Albums" albumData={newAlbumData} viewprop="Show all"/>
      </div>
    )
}