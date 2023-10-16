import React from 'react'

const Citas = ({mascota, index, duenio, fecha, hora, sintomas, deleteCita}) => {
  return (
    <div className="card text-center mt-5" key={index}>
        <h4 className="card-header">
            Mascota: {mascota}
        </h4>
        <div className="card-body">
            <h5 className="card-title">Dueño: {duenio} </h5>
            <p className="card-text">Fecha y hora de cita: {fecha}, {hora}</p>
            <p className='card-text'>Sintomas: {sintomas}</p>
        </div>
        <div className="card-footer text-body-secondary">
            <button className='btn-primary' onClick={()=> deleteCita(mascota)}>Borrar cita</button>
        </div>
    </div>
  )
}

export default Citas