import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './style.css'


const Navbar = () => {

    const [isActive, setIsActive] = useState(false)

    const toogleClass = () => {
        setIsActive(!isActive)
    }



    return (
        <div className='Navbar'>

            <div className='menu-icon' onClick={toogleClass} >
                <div className='menu-icon-bar' />
                <div className='menu-icon-bar' />
                <div className='menu-icon-bar' />
            </div>

            <div className='title-stock'>
                <h1>
                    Stock
                </h1>
            </div>

            <ul className={isActive ? 'nav nav_active' : 'nav'}>
                <button
                    onClick={toogleClass}
                >X</button>
                <li>
                    <Link
                        to='/'
                        className='Link'
                        onClick={toogleClass}
                    >Home</Link>
                </li>
                <li>
                    <Link
                        to='/newproduct'
                        className='Link'
                        onClick={toogleClass}
                    >NewProduct</Link>
                </li>
                <li>
                    <Link
                        to='/orders'
                        className='Link'
                        onClick={toogleClass}
                    >Orders</Link>
                </li>
                <li>
                    <Link
                        to='/neworder'
                        className='Link'
                        onClick={toogleClass}
                    >NewOrders</Link>
                </li>
                <li>
                    <Link
                        to='/stock'
                        className='Link'
                        onClick={toogleClass}
                    >Stock</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar