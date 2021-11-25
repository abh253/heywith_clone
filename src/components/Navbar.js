import React from 'react'
import Heywith from '../data/logo/Heywith'
import SubMenu from './SubMenu'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="nav-center">
            <Link to='/'>
                <Heywith />
            </Link>

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
