import React from 'react'



const ButtonEliminar = ({ item, eliminarProduct, modificarProduct, activarModificador }) => {
    return (
        <div className='btn-container' >
            <button
                onClick={eliminarProduct}
                className='btn eliminar'
                value={item.id}
            >
                Eliminar
            </button>
            <button
                onClick={activarModificador}
                className='btn modificar'
                value={item.id}
            >
                Modificar
            </button>
        </div>
    )
}

export default ButtonEliminar