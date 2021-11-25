import React from 'react'
import Like from '../data/logo/Like'
import Help from '../data/logo/Help'
import Profit from '../data/logo/Profit'
const HomeCom2 = () => {
    return (
        <section className='home-com-2'>
            <article className='text-center'>
                <Like/>
                <h4>Connect personally</h4>
                <p>Create 1-on-1 videos to personally connect with your true fans</p>
            </article>
            <article className='text-center'>
                <Help style={{}} />
                <h4 >Help your people</h4>
                <p>Share your valuable thoughts to help people achieve their goals</p>

            </article>
            <article className='text-center'>
                <Profit />
                <h4>Monetize individuality</h4>
                <p>Earn money and reputation while you help others grow</p>
            </article>
        </section>
    )
}

export default HomeCom2
