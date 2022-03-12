import React from 'react'
import { useSelector } from 'react-redux'
import BuscadorProduct from '../../components/BuscadorProduct'
import ListProducts from '../../components/ListProducts'


import './style.css'

const FormOrdersPage = () => {
    const list = useSelector(state => state.products)

    return (
        <>
            <BuscadorProduct />
            <ListProducts list={list} />

            <form className='form-orders' >
                <h1>Ingrese datos del cliente</h1>
                <p>Selecione antes antes los productos que necesita la orden!</p>
                <label>
                    Destinatario
                </label>
                <input placeholder='Destinatario' />
                <label>
                    Direccion
                </label>
                <input placeholder='Direccion' />

                <button type="submit">Agregar nueva orden</button>
            </form>

        </>
    )
}

export default FormOrdersPage