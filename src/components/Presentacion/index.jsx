import React from 'react'

import './style.css'

const Presentacion = () => {
    return (
        <div className='presentacion'>

            <div className="card-presentacion-container">
                <h4>
                    Nuevo producto
                </h4>
                <p>Aqui podra crear los nuevos productos para sus ordenes</p>
            </div>

            <div className="card-presentacion-container">
                <h4>
                    Stock
                </h4>
                <p>Aqui se encuentra todos los productos guardados</p>
            </div>

            <div className="card-presentacion-container">
                <h4>
                    Nuevas ordenes
                </h4>
                <p>
                    Aqui creara las nuevas ordenes
                </p>
            </div>

            <div className="card-presentacion-container">
                <h4>
                    Ordenes
                </h4>
                <p>
                    Aqui encontrara las ordenes creadas
                </p>
            </div>



        </div>
    )
}

export default Presentacion