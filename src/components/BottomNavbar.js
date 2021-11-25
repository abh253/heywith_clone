import React from 'react'
import  mainData from '../data/bottom_navbar'
import Heywith from '../data/logo/Heywith';
import {FaTwitter,FaInstagram,FaFacebook} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const BottomNavbar = () => {
    // console.log(mainData);
    const {data}=mainData;
    return (
        <div className='navbar-body'>
        <nav className='bottom-navbar'>
          <div>
                <Link to='/'><Heywith/></Link>
                <div style={{marginTop:'1rem'}}>
                <FaTwitter style={{color:"skyblue",fontSize:'1.5rem'}}/>
                <FaInstagram style={{color:'rgb(161, 79, 216)' ,fontSize:'1.5rem' ,marginLeft:'1rem'}} />
               <FaFacebook style={{fontSize:'1.5rem',marginLeft:'1rem', color:'#1a81db'}}/>
               </div>
          </div>
          <div className='bottom-navbar-data'>
              {
                  data.map((singleData,index)=>{
                      return <section key={index}>
                        <div>{singleData.category}</div>
                        <ul>
                        {
                            singleData.subCategory.map((subSingleData,index)=>{
                                return <li key={index}><a href={`${subSingleData.url}`}>{subSingleData.name}</a></li>
                            })
                        }
                        </ul>  
                        
                      </section>
                  })
              }
          </div>
        </nav>
        <p>@Heywith 2021</p>
        </div>
    )
}

export default BottomNavbar
