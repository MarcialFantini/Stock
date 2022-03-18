import React from 'react'
import ButtonAgregar from './ButtonAgregar'
import ButtonEliminar from './ButtonEliminar'

import './style.css'

const CardProduct = (props) => {
    const {
        item,
        read,
        eliminarProduct,
        modificarProduct,
        activarModificador,
        agregarProduct } = props



    return (

        <div className="list-product" key={item.id} >
            <picture>
                <img src={item.src} alt={item.name} />
            </picture>
            <div className="titles-product">
                <h3>{item.name}</h3>
                <p>Precio:{item.price}</p>
            </div>
            {read ? (
                <ButtonEliminar
                    item={item}
                    eliminarProduct={eliminarProduct}
                    modificarProduct={modificarProduct}
                    activarModificador={activarModificador}
                />) : <ButtonAgregar item={item} agregarProduct={agregarProduct} />}
        </div>
    )
}

export default CardProduct