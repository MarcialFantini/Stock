import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import FormNewProduct from '../../components/FormNewProduct'
import { addProduct } from '../../store/actions'

import './style.css'

const FormNewProductPage = () => {

    const initialState = {
        src: '',
        name: '',
        id: 0,
        price: 0,
    }

    const [product, setProduct] = useState(initialState)



    const dispatch = useDispatch()

    const dispatchProduct = (event) => {
        event.preventDefault()
        dispatch(addProduct(product))
        setProduct(initialState)
    }

    return (
        <>
            <FormNewProduct
                dispatchProduct={dispatchProduct}
                setProduct={setProduct}
                product={product}
            />

        </>
    )
}

export default FormNewProductPage