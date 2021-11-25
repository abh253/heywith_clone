import React from 'react'

const HomeCom3_card = ({ name, price }) => {
    return (
        <div className='card'>
            <div>
                <p>{name}</p>
                <div className='card-line-1'></div>
                <div className='card-line-2'></div>
            </div>

            <p className='price'>${price}</p>
        </div>
    )
}

export default HomeCom3_card
