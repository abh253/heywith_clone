import React from 'react'
import img1 from '../data/images/homePage_4_img1.jpeg'
import img2 from '../data/images/homePage_4_img2.jpeg'
import CalculateEarning from './CalculateEarning'
import HomeCom4_text from './HomeCom4_text'

const HomeCom4 = () => {
    const [open,setOpen]=React.useState(false);
    return (
        <section className='home-com-4'>
            {open?<CalculateEarning setOpen={setOpen}/>:<HomeCom4_text setOpen={setOpen}/>}


            <article className='home-com-4-img'>
                <img className='img-requests' src={img1} alt="requests" />
                <img className='img-earnings'src={img2} alt="earning" />
            </article>
        </section>
    )
}

export default HomeCom4
