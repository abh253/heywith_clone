import React from 'react'
import TickBullet from '../data/logo/TickBullet'

const HomeCom4_text = ({setOpen}) => {
    return (
        <article className='home-com-4-text'>
        <h4>Build a new income channel that pays you for your time and expertise.</h4>
        <p>Share what you love, believe, and know. All through short videos.</p>
        <ul>
            <li><div><TickBullet/></div>  Build a unique profile as your skills</li>
            <li><div><TickBullet/></div>  Customize it with your own colors</li>
            <li><div><TickBullet/></div>  Add unlimited video services </li>
            <li><div><TickBullet/></div>  Set your own asking & video price</li>
            <li><div><TickBullet/></div>  Manage paid requests</li>
            <li><div><TickBullet/></div>  Easy to remember link to add into your social media bio</li>
        </ul>
        <button className='button-cal' type='button' onClick={()=>setOpen(true)}>Calculate your earning</button>
    </article>
    )
}

export default HomeCom4_text
