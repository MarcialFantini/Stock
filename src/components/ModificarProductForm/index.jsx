import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { modificateProduct } from '../../store/actions'

import './style.css'

const ModificarProductForm = ({ id, setModificar }) => {

    const initialState = {
        src: '',
        name: '',
        id: 0,
        price: 0,
    }

    const [productModificate, setProductModificate] = useState(initialState)

    const handlerModificateProductResult = (event) => {

        setProductModificate({
            ...productModificate,
            [event.target.name]: event.target.value
        })

    }

    const dispatch = useDispatch()

    const modificarProduct = (event) => {
        event.preventDefault()
        dispatch(modificateProduct([productModificate, id]))
        setModificar(false)
    }


    return (
        <div className='form-modificador-container' >
            <form action="">
                <label htmlFor="">Nombre</label>
                <input
                    type="text"
                    name="name"
                    placeholder='Nombre'
                    onChange={handlerModificateProductResult}
                />
                <label htmlFor="">Precio</label>
                <input
                    type="text"
                    name="price"
                    placeholder='Precio'
                    onChange={handlerModificateProductResult}
                />
                <label htmlFor="">Url de Imagen</label>
                <input
                    type="text"
                    name="src"
                    placeholder='Url de la Imagen'
                    onChange={handlerModificateProductResult}
                />
                <label htmlFor="">Id del producto</label>
                <input
                    type="text"
                    name="id"
                    placeholder='Id del Producto'
                    onChange={handlerModificateProductResult}
                />
                <button type="submit"
                    onClick={modificarProduct}
                >
                    Modificar
                </button>
            </form>
        </div>
    )
}

export default ModificarProductForm