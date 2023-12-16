import React from "react";
import Logo from "./Logo";
import GiveFeedback from "./GiveFeedback"
import Box from '@mui/material/Box';
import "./Header.css"
import Searchicon from "../assets/Searchicon.jpg"


export default function Header (){
  return (
    <Box  className="headerBox">
        <Logo/>
        <div className="search">
        <input className="searchBar" placeholder="Search a album of your choice" />
        <div className="iconDiv">
        <img src={Searchicon}/>
        </div>
       
        </div>
      
        <GiveFeedback/>
   </Box>
  )
}