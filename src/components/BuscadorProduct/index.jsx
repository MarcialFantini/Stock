import React from 'react'

import './style.css'

const BuscadorProduct = ({ products }) => {



    return (
        <>
            <form method="post" className='buscador'>
                <label > <h1>Ingrese nombre de producto</h1> </label>
                <input type="text" placeholder='Ingrese nombre' />
            </form>
        </>
    )
}

export default BuscadorProduct