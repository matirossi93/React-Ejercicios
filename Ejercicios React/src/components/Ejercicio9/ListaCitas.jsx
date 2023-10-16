import React from 'react'
import Citas from './Citas'

const ListaCitas = ({listaCitas, deleteCita}) => {
  return (
    <div className='d-flex justify-content-center'>
        {listaCitas.map((citas, index) => 
            listaCitas && <Citas key={index} mascota={citas.mascota} duenio={citas.duenio} fecha={citas.fecha} hora={citas.hora} sintomas={citas.sintomas} deleteCita ={deleteCita} />

         )}
    </div>
  )
}

export default ListaCitas