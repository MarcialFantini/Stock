import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BuscadorProduct from '../../components/BuscadorProduct'
import ListProducts from '../../components/ListProducts'
import { addOrder } from '../../store/actions'


import './style.css'

const FormOrdersPage = () => {
    const list = useSelector(state => state.products)
    const [ordenProducts, setOrdenProducts] = useState([])

    const agregarProduct = (event) => {

        const id = event.target.value
        const newProduct = list.find(item => {
            return (item.id === id)
        })

        const indexDentro = ordenProducts.findIndex(product => product.id === id)

        if (indexDentro === -1) {
            setOrdenProducts([...ordenProducts, newProduct])
        } else {
            const newArrayProducts = [...ordenProducts]
            newArrayProducts[indexDentro].cantidad += 1
            setOrdenProducts(newArrayProducts)
        }
    }

    const [datosDestinatario, setDatosDestinatario] = useState({
        destinatario: "",
        direccion: ""
    })

    const handleSetDatos = (event) => {
        setDatosDestinatario({
            ...datosDestinatario,
            [event.target.name]: event.target.value
        })
    }

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()

        const idNewOrder = ordenProducts.length + datosDestinatario.destinatario

        const newOrders = {
            id: idNewOrder,
            ...datosDestinatario,
            ordenProducts: ordenProducts
        }

        dispatch(addOrder(newOrders))

    }



    const [busqueda, setBusqueda] = useState("")

    useEffect(() => {

    }, [ordenProducts, busqueda])


    return (
        <>
            <BuscadorProduct setBusqueda={setBusqueda} />
            <ListProducts
                list={list}
                read={false}
                busqueda={busqueda}
                agregarProduct={agregarProduct}

            />

            <form
                onSubmit={handleSubmit}
                className='form-orders' >
                <h1>Ingrese datos del cliente</h1>
                <p>Selecione antes antes los productos que necesita la orden!</p>
                <label>
                    Destinatario
                </label>
                <input
                    placeholder='Destinatario'
                    name='destinatario'
                    onChange={handleSetDatos}
                />
                <label>
                    Direccion
                </label>
                <input
                    placeholder='Direccion'
                    name='direccion'
                    onChange={handleSetDatos}
                />

                <button type="submit"
                >Agregar nueva orden</button>
            </form>

        </>
    )
}

export default FormOrdersPage