import React from 'react'

import './style.css'

const BuscadorProduct = ({ setBusqueda }) => {

    const handleSetBuscador = (event) => {
        setBusqueda(event.target.value)

    }

    return (
        <>
            <form method="post" className='buscador'>
                <label > <h1>Ingrese nombre de producto</h1> </label>
                <input
                    type="text"
                    placeholder='Ingrese nombre'
                    onChange={handleSetBuscador}
                />
            </form>
        </>
    )
}

export default BuscadorProduct