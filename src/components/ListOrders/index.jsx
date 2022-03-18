import React from 'react'
import Order from '../Order'

const ListOrders = ({ list, read, setIdOrder, editarActive, handleDelete }) => {
    return (
        <div>
            {list.map((item) => <Order
                editarActive={editarActive}
                setIdOrder={setIdOrder}
                read={read}
                key={item.id}
                item={item}
                handleDelete={handleDelete}
            />)}
        </div>
    )
}

export default ListOrders