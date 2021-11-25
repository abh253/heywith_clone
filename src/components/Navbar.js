import React from 'react'
import Heywith from '../data/logo/Heywith'
import SubMenu from './SubMenu'
const Navbar = () => {
    return (
        <nav  className="nav-center">
                    <Heywith />

                    <div className="nav-links">
                        <a className='links-remove' href="#">FAQ</a>
                        <a className='links-remove' href="#">Live Chat</a>
                        <button className='links-remove'>Join Free</button>
                        <SubMenu />

                    </div>

        </nav>
    )
}

export default Navbar
