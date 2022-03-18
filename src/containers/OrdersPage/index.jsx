import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'




import BuscadorOrder from '../../components/BuscadorOrder'
import ListOrders from '../../components/ListOrders'
import { deleteOrder } from '../../store/actions'
import FormEditOrder from './FormEditOrder'



const OrdersPage = () => {

    const dispatch = useDispatch()
    const list = useSelector(state => state.orders)

    const [busqueda, setBusqueda] = useState('')

    const [editar, setEditar] = useState(false)

    const [idOrder, setIdOrder] = useState('')

    const editarActive = () => {
        setEditar(!editar)
    }

    const handleDelete = (event) => {

        dispatch(deleteOrder(event.target.value))
    }

    return (
        <>
            {editar ? <FormEditOrder setEditar={setEditar} idOrder={idOrder} /> : null}
            <BuscadorOrder

                setBusqueda={setBusqueda}
            />
            <ListOrders
                handleDelete={handleDelete}
                setIdOrder={setIdOrder}
                editarActive={editarActive}
                list={list}
                busqueda={busqueda}
                read={true}
            />
        </>
    )
}

export default OrdersPage