import React from "react";
import Header from './Header';
import Herosection from './Herosection';
import Section from "./Section"
import { useState, useEffect } from "react";
import Songs from "./Songs"



export default function Page(){

   const [topAlbumData, setTopAlbumsetData]  = useState([])
   const [newAlbumData, setNewAlbumsetData]  = useState([])
//    console.log("top",topAlbumData )
//    console.log("new",newAlbumData )


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
            <Section title="Top Albums" albumData={topAlbumData} viewprop="Show all" type="album"/>
            <Section title="New Albums" albumData={newAlbumData} viewprop="Show all" type="album"/>
             <hr color="#34c94b"/>
             <Songs title="Songs" type="songs"/>

      </div>
    )
}