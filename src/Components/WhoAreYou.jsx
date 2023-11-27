import React from 'react'
import { Link } from 'react-router-dom'

function WhoAreYou() {
  return (
    <div>
        <div className='main_board_div'>
            <h1>Hello</h1>
            <h2>Let us know who are you?</h2>
            <hr className='header_hr'/>
            <Link to="/menu"><button className='menu_button'>Customer</button></Link>
            <Link to="/employee"><button className='menu_button'>Employee</button></Link>
            <Link to="/"><button className='menu_button'>Back</button></Link>
        </div>
    </div>
  )
}

export default WhoAreYou