import React from 'react'

import CardProduct from '../CardProduct'

import './style.css'

const ListProducts = ({ list, read }) => {
    return (
        <div className='list-products'>
            {list.map((item) => <CardProduct read={read} key={item.id} item={item} />)}
        </div>
    )
}

export default ListProducts