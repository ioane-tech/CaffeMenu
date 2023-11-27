import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
function Menu() {
const [currentTime,setCurrentTime]=useState()
const [currentDate,setCurrentDate]=useState()




useEffect(()=>{

    const intervalId = setInterval(() => {
        const today=new Date()

        const hours = String(today.getHours()).padStart(2, '0'); // Add leading zeros
        const minutes = String(today.getMinutes()).padStart(2, '0'); // Add leading zeros
        const seconds = String(today.getSeconds()).padStart(2, '0'); // Add leading zeros
        const time = `${hours}:${minutes}:${seconds}`;
        setCurrentTime(time)


        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        const fullDate = `${month}/${date}/${year}`;
        setCurrentDate(fullDate)  
    }, 1000);
})


  return (
    <div>
        <div className='main_board_div'>
           <img className='Menu_image' src='MenuImage.png' rel='one piece of coffe grain'/>
            <p className='menu_date'>{currentDate}</p>
            <p className='menu_date'>{currentTime}</p>
            <hr className='header_hr'/>
           
            <h1>CAFFE MAR-IO</h1>
            <p className='menu_text'>EST _ 2023</p>
            <hr className='header_hr'/>

            <p className='menu_text'>TRADITIONAL PRODUCT</p>
            <Link to="/whoAreYou"><button className='menu_button'>MENU</button></Link>
        </div>
    </div>
  )
}

export default Menu