import React from 'react'
import { useDispatch, useSelector } from 'react-redux'




import BuscadorOrder from '../../components/BuscadorOrder'
import ListOrders from '../../components/ListOrders'



const OrdersPage = () => {

    const dispatch = useDispatch()
    const list = useSelector(state => state.orders)



    return (
        <>
            <BuscadorOrder />
            <ListOrders list={list} />
        </>
    )
}

export default OrdersPage