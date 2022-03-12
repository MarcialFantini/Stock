import React from 'react'

const BuscadorOrder = () => {
    return (
        <>
            <form method="post" className='buscador'>
                <label > <h1>Ingrese nombre de Orden</h1> </label>
                <input type="text" placeholder='Ingrese nombre' />
            </form>
        </>
    )
}

export default BuscadorOrder