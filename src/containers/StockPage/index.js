import React from 'react'
import { product } from './ListProducts'

import BuscadorProduct from '../../components/BuscadorProduct'

import './style.css'
import { useSelector } from 'react-redux'

const StockPage = () => {

    const list = useSelector(state => state.products)

    return (

        <>
            <BuscadorProduct />
            <div className='container-products'>
                {list.map((item) => product(item))}
            </div>
        </>
    )
}

export default StockPage