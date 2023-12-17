import React from "react";
import Logo from "./Logo";
import GiveFeedback from "./GiveFeedback"
import Box from '@mui/material/Box';
import styles from "./Header.module.css"
import {ReactComponent as Searchicon} from "../assets/Search_icon.svg"


export default function Header (){

  const onSubmit= (e)=>{
    e.preventDefault();
  }


  return (
    <Box  className={styles.headerBox}>
        <Logo/>
        {/* <div className="search">
          <input className="searchBar" placeholder="Search a album of your choice" />
          <div className="iconDiv">
            <img src={Searchicon} alt="logo"/>
          </div>
        </div> */}
        <form onSubmit={onSubmit} className={styles.wrapper}>
          <input className={styles.search} required placeholder="Search a album of your choice" />
          <button type="submit" className={styles.searchButton}>
            <Searchicon/>
          </button>
        </form>
      
        <GiveFeedback/>
   </Box>
  )
}