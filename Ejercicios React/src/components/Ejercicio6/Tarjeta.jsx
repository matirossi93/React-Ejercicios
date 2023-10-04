import React from 'react'
import "./tarjeta.css"


const Tarjeta = ({ color, index, deleteColor }) => {
  
  const colorFondo = {
    backgroundColor: `${color}`
  
  }
  return (
    <>
        <div className="card w-25 d-flex align-items-center m-2">
          <div className=" caja2 border " style={colorFondo} key={index}></div>
          <div className="card-body">
              <h5 className="card-title">{color}</h5>
              <button onClick={() => deleteColor(color)}>Borrar</button>
          </div>
       </div>
    </>
  )
}

export default Tarjeta