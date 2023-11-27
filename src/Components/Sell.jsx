import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function CoffeMenu({header,image,cost}) {


  const navigate=useNavigate()
  const handlerback=()=>{
    navigate("/menu")
  }
  return (
    <div className='main_board_div'>
        <h1>{header}</h1>
        <hr className='header_hr'/>
        <div className='item_image_div'><img className='item_image' src={image}/></div>
        
        <button className='button_cost'>{cost}</button>
        <button onClick={handlerback} className='button_back'>Back</button>


    </div>
  )
}

export default CoffeMenu