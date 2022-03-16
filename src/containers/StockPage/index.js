import React, { useState } from 'react'


import BuscadorProduct from '../../components/BuscadorProduct'

import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../../components/CardProduct'
import { deleteProduct } from '../../store/actions'
import ModificarProductForm from '../../components/ModificarProductForm'

const StockPage = () => {

    const list = useSelector(state => state.products)

    const dispatch = useDispatch()

    const eliminarProduct = (event) => {
        console.log(event.target.value)
        dispatch(deleteProduct(Number(event.target.value)))
    }

    const [modificar, setModificar] = useState(false)

    const [id, setId] = useState(0)

    const activarModificador = (event) => {
        setId(event.target.value)
        setModificar(!modificar)
        console.log(modificar)

    }


    return (

        <>
            {modificar ? <ModificarProductForm id={id} /> : null}
            <BuscadorProduct />
            <div className='container-products'>
                {list.map((item) => {
                    return (
                        <CardProduct
                            key={item.id}
                            read={true}
                            item={item}
                            eliminarProduct={eliminarProduct}
                            idModificar={id}
                            activarModificador={activarModificador}
                        />)
                })}
            </div>
        </>
    )
}

export default StockPage