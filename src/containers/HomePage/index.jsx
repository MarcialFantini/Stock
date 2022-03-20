import React from 'react'
import Presentacion from '../../components/Presentacion'


import picture from './stokcsPicture.jpg'
import './style.css'

const HomePage = () => {
    return (
        <div>
            <header className='header'>
                <picture>
                    <img src={picture} alt='header' className='img-header' />
                    <div className='container-titulo'>
                        <h1>Bienvenido a Stock</h1>
                    </div>
                </picture>
            </header>
            <Presentacion />
        </div>
    )
}

export default HomePage