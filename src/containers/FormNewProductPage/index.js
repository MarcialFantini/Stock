import React from 'react'

import './style.css'

const FormNewProductPage = () => {
    return (
        <>
            <div className='new-product-page'>
                <h1>
                    Ingrese nuevo producto
                </h1>
                <p>
                    Los siguientes datos seran utilizados para crear
                    un nuevo producto en la base de datos del servidor
                    para poder ser vista en la pestania de stock
                </p>
                <form className='form'>
                    <label>
                        Nombre:
                    </label>
                    <input
                        placeholder='Nombre'
                    />
                    <label>
                        Precio:
                    </label>
                    <input
                        placeholder='Precio'
                    />
                    <label>
                        ID Producto:
                    </label>
                    <input
                        placeholder='ID Producto'
                    />
                    <label>
                        Url imagen:
                    </label>
                    <input
                        placeholder='Url imagen'
                    />
                    <button type='submit'>
                        Agregar
                    </button>
                </form>
            </div>

        </>
    )
}

export default FormNewProductPage