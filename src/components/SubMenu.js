import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const SubMenu = () => {

    const [show,setShow]=useState(false);

    

    return (
        <div className={show?"submenu show":"submenu"}>
            <FaBars style={{fontSize:'1.5rem'}} onClick={()=>setShow(!show)}/>
            <ul className=''>
                <li><a href="#">Sign Up</a></li>
                <li style={{borderBottom:'1px solid #d2d6dc'}}><a href="/login">Login</a></li>
                
                
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Live Chat</a></li>
                <li style={{borderBottom:'1px solid #d2d6dc'}}><a href="#">Support</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">About</a></li>
            </ul>
            
        </div>
    )
}

export default SubMenu
