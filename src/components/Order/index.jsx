import React from 'react'

const Order = ({ item }) => {
    return (
        <div className="order">
            <div className="text"> {item.text} </div>
            <div className="actions">
                <button>Editar</button>
                <button>Eliminar</button>
            </div>

        </div>
    )
}

export default Order