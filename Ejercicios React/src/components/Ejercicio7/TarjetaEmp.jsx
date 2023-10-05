import React from 'react'
import "./ejercicio7.css"

const TarjetaEmp = ({index, empleado}) => {
  return (
    <div className="card w-40 h-40 d-flex align-items-center flex-row m-2">
          <div className=" ms-2 caja3 border " key={index}></div>
          <div className="card-body d-flex flex-column align-items-center">
              <h4>{empleado.fullName}</h4>
              <h4>{empleado.department}</h4>
              <h5>{empleado.title}</h5>
          </div>
    </div>
  )
}

export default TarjetaEmp