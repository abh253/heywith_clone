import React from 'react'
import { useState,useEffect } from 'react';
import dataImported from '../data/home_com_3_data'
import HomeCom3_card from './HomeCom3_card';

const HomeCom3 = () => {
    const [open,setOpen]=useState(false);
    const [data,setData]=useState([]);
    useEffect(()=>{
        
        if(!open){
            setData(dataImported.slice(0,12));
        }
        else{
            setData(dataImported);
        }
    },[open])
    return (
        <section className='home-com-3'>
            <article className='text-center home-com-3-heading'>
            <h4>Create endless opportunities for you and your audience</h4>
            <p className='text-center'>Easily create a unique video service that fits your skills and your audience's needs.</p>
            </article>
            <article className='home-com-3-cards'>
                {
                    data.map((subData, index) => {
                        return <HomeCom3_card key={index} {...subData} />
                    })
                }
            </article>

            {
                !open?
                <button className='open-button' onClick={()=>setOpen(true)}>
                    Show More
                </button>:
                <div>
                <button className='close-button' onClick={()=>setOpen(false)}>
                    Show Less
                </button>
                <button className='service-button'>
                    Add your own video service
                </button>
                </div>
                
            }
        </section>
    )
}

export default HomeCom3
