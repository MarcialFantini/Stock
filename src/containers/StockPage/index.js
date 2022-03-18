import React, { useEffect, useState } from 'react'


import BuscadorProduct from '../../components/BuscadorProduct'

import './style.css'
import { useDispatch, useSelector } from 'react-redux'

import { deleteProduct } from '../../store/actions'
import ModificarProductForm from '../../components/ModificarProductForm'
import ReturnListProduct from './ReturnListProduct'





const StockPage = () => {

    const [busqueda, setBusqueda] = useState('')

    const list = useSelector(state => state.products)

    const listProducts = [...list]

    const dispatch = useDispatch()

    const eliminarProduct = (event) => {
        console.log(event.target.value)
        dispatch(deleteProduct(event.target.value))
    }

    const [modificar, setModificar] = useState(false)

    const [id, setId] = useState('')

    useEffect(() => {
        console.log(id)
    }, [id])

    const activarModificador = (event) => {
        setId(event.target.value)
        setModificar(!modificar)



    }
    return (

        <>
            {modificar ? <ModificarProductForm id={id} /> : null}
            <BuscadorProduct setBusqueda={setBusqueda} />
            <div className=''>
                <ReturnListProduct
                    busqueda={busqueda}
                    listProducts={listProducts}
                    eliminarProduct={eliminarProduct}
                    activarModificador={activarModificador}
                    id={id}
                />
            </div>
        </>
    )
}

export default StockPage