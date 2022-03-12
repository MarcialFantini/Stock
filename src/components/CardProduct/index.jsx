import React from 'react'

import './style.css'

const CardProduct = ({ item, read }) => {
    return (

        <div className="list-product" key={item.id} >
            <picture>
                <img src={item.src} />
            </picture>
            <div className="titles-product">
                <h3>{item.name}</h3>
                <p>Precio:{item.precio}</p>
            </div>
            {read ? console.log("yess") : null}
        </div>
    )
}

export default CardProduct