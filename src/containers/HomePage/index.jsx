import React from 'react'
import Navbar from '../../components/Navbar'

import picture from './stokcsPicture.jpg'
import './style.css'

const HomePage = () => {
    return (
        <>
            <header className='header'>
                <picture>
                    <img src={picture} />
                    <div className='container-titulo'>
                        <h1>Bienvenido a Stock</h1>
                    </div>
                </picture>
            </header>
        </>
    )
}

export default HomePage