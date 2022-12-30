import React from 'react'
import s from './style.module.css';

const DisplayProduct = (props) => {
  return (
    <div className={s.container}>
      <div className={s.display}>
        {//jsx validation
          props.producto ? `El precio para ${props.producto} es de $${props.precio}` : "No se ha seccionado ningun producto"
        }
      </div>
    </div>
  )
}

export default DisplayProduct
