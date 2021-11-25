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
            <Link to='/'>
                <li><a href="#">Sign Up</a></li>
            </Link>
            <Link to='/login'>
                <li style={{borderBottom:'1px solid #d2d6dc'}}><a href='#'>Login</a></li>
            </Link>
                
            <Link to='/'>    
                <li><a href="#">FAQ</a></li>
            </Link>
            <Link to='/'>
                <li><a href="#">Live Chat</a></li>
            </Link>

            <Link to='/'>
                <li style={{borderBottom:'1px solid #d2d6dc'}}><a href="#">Support</a></li>
            </Link>
                <Link to='/'>
                <li><a href="#">Career</a></li>
                </Link>
                <Link to='/'>
                <li><a href="#">About</a></li>
                </Link>
            </ul>
            
        </div>
    )
}

export default SubMenu
