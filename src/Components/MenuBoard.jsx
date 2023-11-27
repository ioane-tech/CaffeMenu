import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { useOrderedItems } from './OrderedItemsContext'

function MenuBoard() {
  
  const { addItem } = useOrderedItems();




  const [inputValue,setInputValue]=useState("")
  const [menuImage,setMenuImage]=useState("")
  const [cost,setCost]=useState()
  const [quantity,setQuantity]=useState(1)

  const [tableNumPage,setTableNumPage]=useState(true)
  const [tableNum,setTableNum]=useState("")


  const [selectedValue,setSelectedValue]=useState("")


  const [pageChange,setPageChange]=useState(false)

  const navigate=useNavigate()




  const handleItemClick = (cost, image, value, e) => {
    setInputValue(value);
    setMenuImage(image);
    setCost(cost);
    setPageChange(true);

  }

const handleBuy=(cost,image,value,tableNum,quantity)=>{
  const newItem = {
    img: image,
    name: value,
    quantity:quantity,
    price: Math.floor((cost * quantity) * 100) / 100,
    tableNum: tableNum,
  };

  addItem(newItem);

  toast.success('You ordered. it will ready soon', {
    className: 'custom-toast-success', // Apply the success toast style
  });
}

const backHandler=()=>{
  setPageChange(false)
  setQuantity(1)
}


  return (
    <div>
      <ToastContainer /> 

      {tableNumPage==true ?
        (
        <div className='main_board_div'>
          <h2>Enter Your table number</h2>
          <hr className='header_hr'/>
          <input 
            onChange={(e)=>setTableNum(e.currentTarget.value)} 
            style={{marginBottom:"30px"}} 
            className="menu_board_input no-arrows" 
            type='number' 
            placeholder='Type here'
          />
          <button onClick={()=>setTableNumPage(false)} className='menu_button'>Go</button>
          <Link to="/whoAreYou"><button onClick={()=>setTableNumPage(true)}  className='menu_button'>Back</button></Link>
        </div>
        )
        :
        
        pageChange===false &&
        <div className='main_board_div'>
            <h2>We offer</h2>
            <hr className='header_hr'/>
            
          <div className='menu_list_div'>
            <ul>
              <li className='menu_list' onClick={() => handleItemClick("3.25","hotCoffe.png",'hot coffe')}>hot coffe</li>
              <li className='menu_list' onClick={() => handleItemClick("5.05","iceCoffe.png",'ice cofee')}>ice cofee</li>
              <li className='menu_list' onClick={() => handleItemClick("2.20","hotTea.png",'hot tea')}>hot tea</li>
              <li className='menu_list' onClick={() => handleItemClick("4.00","iceTea.png",'ice tea')}>ice tea</li>
              <li className='menu_list' onClick={() => handleItemClick("1.50","iceCream.png",'ice cream')}>ice cream</li>
              <li className='menu_list' onClick={() => handleItemClick("7.70","cheesecake.png",'cheesecake')}>cheesecake</li>
              <li className='menu_list' onClick={() => handleItemClick("12.35","pizza.png",'pizza')}>pizza</li>
            </ul> 
          </div>

            <p ><img className='menu_board_image' src='menuBoardImage.png' rel='cofee cup'/></p>
            <button onClick={()=>setTableNumPage(true)}  className='menu_button'>Back</button>

        </div>
      }
     
         {pageChange && 
          <>
      
              <div className='main_board_div'>
                <h1>{inputValue}</h1>
                <hr className='header_hr'/>
                <div className='item_image_div'><img className='item_image' src={menuImage}/></div>
                
                <p>
                  <input 
                      className='button_cost quantity' 
                      value={quantity}
                      onChange={(e)=> setQuantity(e.currentTarget.value)}
                      type='number' 
                      placeholder="quantity"
                      min="1"
                    />
                </p>
                <button 
                  onClick={()=>handleBuy(cost,menuImage,inputValue,tableNum,quantity)} 
                  className='button_cost'>Buy -${Math.floor((cost * quantity) * 100) / 100}
                </button>
                <button onClick={backHandler} className='button_back'>Back</button>

              </div>
       
          </>
          
         }

    </div>
  )
}

export default MenuBoard