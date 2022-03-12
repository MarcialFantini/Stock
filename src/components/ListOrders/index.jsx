import React from 'react'
import Order from '../Order'

const ListOrders = ({ list }) => {
    return (
        <div>
            {list.map((item) => <Order key={item.id} item={item} />)}
        </div>
    )
}

export default ListOrders