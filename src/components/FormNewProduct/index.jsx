import React from 'react'

const FormNewProduct = ({ setProduct, dispatchProduct, product }) => {

    const handlerChange = (event) => {

        setProduct({
            ...product,
            [event.target.name]: event.target.value
        })

    }


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

                        onChange={handlerChange}
                        placeholder='Nombre'
                        name='name'
                    />
                    <label>
                        Precio:
                    </label>
                    <input

                        onChange={handlerChange}
                        placeholder='Precio'
                        name='price'
                    />
                    <label>
                        ID Producto:
                    </label>
                    <input

                        onChange={handlerChange}
                        placeholder='ID Producto'
                        name='id'
                    />
                    <label>
                        Url imagen:
                    </label>
                    <input

                        onChange={handlerChange}
                        placeholder='Url imagen'
                        name='src'
                    />
                    <button
                        type='submit'
                        onClick={dispatchProduct}
                    >
                        Agregar
                    </button>
                </form>
            </div>
        </>
    )
}

export default FormNewProduct