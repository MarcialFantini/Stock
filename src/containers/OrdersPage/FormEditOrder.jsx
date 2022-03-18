import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modificateOrder } from '../../store/actions'

import './style.css'


const FormEditOrder = (props) => {

    const dispatch = useDispatch()

    const { idOrder, setEditar } = props

    const [editDatos, setEditDatos] = useState({
        destinatario: '',
        direccion: ''
    })

    const handleEdit = (event) => {
        setEditDatos({
            ...editDatos,
            [event.target.name]: event.target.value
        })
    }

    const list = useSelector((state) => state.orders)


    const handleOnSubmit = (event) => {
        event.preventDefault()
        let order = list.filter((item) => {
            console.log(item)
            return (item.id = idOrder)

        })

        const productEdit = {
            ordenProducts: order[0].ordenProducts,

            id: order[0].id,
            destinatario: editDatos.destinatario,
            direccion: editDatos.direccion
        }

        dispatch(modificateOrder([productEdit, idOrder]))

        setEditar(false)
    }

    return (
        <div className='form-orden-container'>
            <form action="" onSubmit={handleOnSubmit}>
                <label htmlFor="">
                    Destinatario
                </label>
                <input type="text"
                    name='destinatario'
                    onChange={handleEdit}
                />
                <label
                    htmlFor=""
                >Direccion
                </label>
                <input
                    type="text"
                    name="direccion"
                    onChange={handleEdit}
                />
                <button type="submit">Modificar</button>
            </form>
        </div>
    )
}

export default FormEditOrder