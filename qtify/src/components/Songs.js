import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from "react";
import Styles from "./Songs.module.css"
import Carousel from "./Carousel.js"


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



export default function Songs({title,type}) {
  const [value, setValue] = useState(0);
  const [tabFilter, setTabFilter] = useState([{key:"all" ,label:"All"}]);
  const [songsData, setSongsData] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  useEffect(()=>{
    fetchFilter();
    fetchSongs();
  },[])

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const fetchFilter = async()=>{
    try{
      const res = await fetch("https://qtify-backend-labs.crio.do/genres");
      const {data} = await  res.json();
      setTabFilter([...tabFilter, ...data])
      console.log(tabFilter)
    }catch(error){
      console.log(error)
    }
  }

  const fetchSongs = async()=>{
    try{
      const res = await fetch("https://qtify-backend-labs.crio.do/songs");
      const data = await res.json();
      setSongsData(data)
      
    }catch(error){
      console.log(error)
    }
  }

  const cardData = songsData.filter((ele)=>(value !==0 ?ele.genre.key === tabFilter[value].key : ele))

  const handleChange = (event, newValue) => {
  setValue(newValue);
  };

  return (
    <div>

     <div className={Styles.section}>
        <div className={Styles.sectionHeader}>
            <p className={Styles.sectionTitle}>{title}</p> 
        </div>
        
      
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  TabIndicatorProps={{
          style:{
            backgroundColor: 'var(--color-primary)',
          }
        }}>
          {tabFilter.map((ele, index)=>(
              <Tab className={Styles.tab} label={ele.label} key={ele.key} {...a11yProps(index)} />
          ))} 
        </Tabs>

       {tabFilter.map((ele,index)=>(
              <CustomTabPanel value={value} index={index}>
              <Carousel key={index} cdata={cardData} type={type}/>
            </CustomTabPanel>
       ))}
    
            {/* <CustomTabPanel value={value} index={0} >
              <Carousel key={0} cdata={songsData} type={type}/>
            </CustomTabPanel>
             
              <CustomTabPanel value={value} index={1} >
               <Carousel key={1} cdata={songsData.filter((ele)=>(
                 ele.genre.key === "jazz"? ele : null
                   
                  ))} type={type}/>
              </CustomTabPanel>  

              <CustomTabPanel value={value} index={2} >
               <Carousel key={2}  cdata={songsData} type={type}/>
              </CustomTabPanel>  
              <CustomTabPanel value={value} index={3} >
               <Carousel key={3} cdata={songsData} type={type}/>
              </CustomTabPanel>  

              <CustomTabPanel value={value} index={4} >
               <Carousel key={4} cdata={songsData} type={type}/>
              </CustomTabPanel>   */}

      </div>
    </div>
  );
}