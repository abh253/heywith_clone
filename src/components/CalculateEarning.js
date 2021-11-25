import react from 'react';
import React from 'react'
import { useState } from 'react/cjs/react.development'

const CalculateEarning = ({ setOpen }) => {

    const [videoPrice, setVideoPrice] = useState(0);
    const [perdayVideo, setPerdayVideo] = useState(0);

    const [totalEarning, setTotalEarning] = useState(perdayVideo * (videoPrice - videoPrice * 0.8));
    react.useEffect(() => {
        setTotalEarning(perdayVideo * (videoPrice - videoPrice * 0.8));

    }, [videoPrice, perdayVideo])
    return (
        <article className='home-com-4-calEar'>
            <div className='earning-heading'>
                <h4>Calculate your earning</h4>
                <p>Find out how much you can earn by making short videos</p>
            </div>
            <div className='earning-cal'>
                <div>
                    <label htmlFor="yourEarning">Your average price for video requests</label>
                    <div className='price-input'>
                        <span>$</span> <input id='yourEarning' type="number" placeholder={'00'} onChange={(e) => { setVideoPrice(e.target.value) }} />
                    </div>
                </div>
                <div className='earning-range'>
                    <div>
                        <p>{perdayVideo}</p>
                        <label htmlFor="video-count">Videos you can make daily</label>
                    </div>
                    <input type="range" min={0} max={100} value={perdayVideo} onChange={(e) => { setPerdayVideo(e.target.value) }} />
                </div>
                <div className='earning-result'>
                    <p>You can earn</p>
                    <p className='earning-amount'>$ <span>{totalEarning.toFixed(2)}</span> per day</p>
                </div>
                <button onClick={() => setOpen(false)}>Hide Calculator</button>
            </div>
        </article>
    )
}

export default CalculateEarning
