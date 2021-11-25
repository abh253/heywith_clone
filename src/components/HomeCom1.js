import React from 'react'
import homePage_img1 from '../data/images/homePage_img1.jpeg';
// const url= '..\data\images\homePage_img1.jpeg';
const HomeCom1 = () => {
    return (
        <section className='home-com-1'>
            <div>
                <h1>Receive paid questions & video requests from your audience</h1>
                <p>Share your expertise, advice, & knowledge to your fans & followers <b>through personalized short videos</b></p>
                
                <form action="#" >
                    <input type="text" placeholder='Enter your email' />
                    <button type='button'>Sign up Free</button>
                </form>
            </div>
            <img src={homePage_img1}/>
        </section>   
    )
}

export default HomeCom1
