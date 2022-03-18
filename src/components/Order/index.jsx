import React from 'react'
import Btns from './Btns'

import './style.css'
const Order = ({ item, read, setIdOrder, editarActive, handleDelete }) => {

    const handleSetId = (event) => {
        setIdOrder(event.target.value)
        console.log(event.target.value)
        editarActive()
    }
    console.log(item)

    return (
        <div className="order">
            <div className="text">
                <p>{item.destinatario}</p>
                <p>{item.direccion}</p>
            </div>
            <div className="actions">
                <Btns read={read} handleSetId={handleSetId} item={item} handleDelete={handleDelete} />
            </div>

        </div>
    )
}

export default Order