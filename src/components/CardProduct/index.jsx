import React from 'react'
import ButtonAgregar from './ButtonAgregar'
import ButtonEliminar from './ButtonEliminar'

import './style.css'

const CardProduct = ({ item, read, eliminarProduct, modificarProduct, activarModificador }) => {
    return (

        <div className="list-product" key={item.id} >
            <picture>
                <img src={item.src} />
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
                />) : <ButtonAgregar item={item} />}
        </div>
    )
}

export default CardProduct