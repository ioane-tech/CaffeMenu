import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useOrderedItems } from './OrderedItemsContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Employee() {

    const { orderedItems, removeItem } = useOrderedItems();



    const [error,setError]=useState(false)

    const [digitCode,setDigitCode]=useState("")
    const [pageChange,setPageChange]=useState(false)



  const GoHandler=()=>{
        if(digitCode!="5823"){
            setError(true)
        }
        else{
            setError(false)
            setPageChange(true)
        }
        
  }

  const handleOrderReady = (itemToRemove) => {
      removeItem(itemToRemove);

      toast.success("Order is ready", {
        className: 'custom-toast-success',
      })
    };
  return (
    <div>
      <ToastContainer /> 
        {pageChange==false?
            (           
                <div className='main_board_div'>
                    <h2>Enter your company four digit code(its "5823")</h2>
                    <hr className='header_hr'/>
                    <input
                        onChange={(e) => {
                            const value = e.currentTarget.value;
                            // Use a regular expression to allow only numeric input with a maximum length of 4
                            const newValue = value.replace(/\D/g, '').slice(0, 4);
                            setDigitCode(newValue);
                        }}
                        value={digitCode}
                        style={{ marginBottom: "10px" }}
                        className="menu_board_input no-arrows"
                        type="text"  // Change the type to "text"
                        placeholder="Type here"
                        maxLength="4"  // Set the maxLength to 4 characters
                    />
                    <p>{error==true && "Digit code is incorect. Try again"}</p>

                    <button onClick={(e)=>GoHandler(e)} className='menu_button'>Go</button>
                    <Link to="/whoAreYou"><button onClick={()=>setDigitCode("")}  className='menu_button'>Back</button></Link>
                </div>
            )
            :  
            (
                <div className='main_board_div orders_main_board'>
                  <h1>ORDERS</h1>
                  <hr className='header_hr' />
        
                  {orderedItems && orderedItems.length > 0 ? ( // Check if orderedItems is defined and not empty
                    <>
                      {orderedItems.map((item, index) => (
                        <>
                          <div className='order_div' key={index}>
                            <img className='order_img' src={item.img} alt={item.name} />
                            <div className='order_text'>
                              <p>{item.name}</p>
                              <p>{item.quantity}X</p>
                              <p>${item.price}</p>
                              <p>Table {item.tableNum}</p>
                            </div>
                          </div>
                          <button onClick={()=>handleOrderReady(item)} className='menu_button'>Order is Ready</button>
                          <hr className='header_hr' />
                        
                        </>
                      ))}
                   </>
                  ) : (
                    <p>No orders yet.</p>
                  )}
                   <Link to="/whoAreYou"><button onClick={()=>setDigitCode("")}  className='menu_button'>Back</button></Link>
                </div>
              )}
            </div>
    );
}
export default Employee