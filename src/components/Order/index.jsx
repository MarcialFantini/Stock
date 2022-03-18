import React from 'react'
import Btns from './Btns'

import './style.css'
const Order = ({ item, read, setIdOrder, editarActive, handleDelete }) => {

    const handleSetId = (event) => {
        setIdOrder(event.target.value)
        console.log(event.target.value)
        editarActive()
    }
    const priceTotal = (item) => {
        let total = 0

        item.ordenProducts.forEach((item) => {
            total += (item.cantidad * item.price)

        })
        return total
    }

    return (
        <div className="order">
            <div className="text">
                <p >Cliente: {item.destinatario}</p>
                <p>Direccion:  {item.direccion}</p>
                <p>Precio: {priceTotal(item)}</p>
            </div>
            <div className="actions">
                <Btns read={read} handleSetId={handleSetId} item={item} handleDelete={handleDelete} />
            </div>

        </div>
    )
}

export default Order