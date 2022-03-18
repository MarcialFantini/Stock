import React from 'react'

const ButtonAgregar = ({ item, agregarProduct }) => {
  return (
    <div className='btn-container' >
      <button
        className='btn agregar'
        value={item.id}
        onClick={agregarProduct}
      >
        Agregar
      </button>

    </div>
  )
}

export default ButtonAgregar