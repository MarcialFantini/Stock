import React from 'react'

const BuscadorOrder = ({ setBusqueda }) => {

    const handleBusqueda = (event) => {

        setBusqueda(event.target.value)

    }

    return (
        <>
            <form method="post" className='buscador'>
                <label > <h1>Ingrese nombre de Orden</h1> </label>
                <input
                    type="text"
                    placeholder='Ingrese nombre'
                    onChange={handleBusqueda}
                />

            </form>
        </>
    )
}

export default BuscadorOrder