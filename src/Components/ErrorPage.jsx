import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function ErrorPage({errorType}) {
    const navigate=useNavigate()
  return (
    <div className='main_board_div'>
        {errorType=="itemError"?
        <>
            <h2 style={{marginTop:"60px",textAlign:"center"}}>We dont have this item</h2>
            <button onClick={()=>navigate("/menu")} className='button_cost'>Back</button>
         </>
         :
         errorType=="pageError"?
         <>
            <h2 style={{marginTop:"60px",textAlign:"center"}}>Page not found</h2>
            <button onClick={()=>navigate("/menu")} className='button_cost'>Back</button>
         </>
         :
         <></>
        }
       
    </div>
  )
}

export default ErrorPage