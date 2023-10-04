import React from 'react'
import Tarjeta from './Tarjeta'

const ListaColores = ({ listaColores, setListaColores, deleteColor }) => {

  

  return (
    <div className='d-flex justify-content-center mt-5'>
       {listaColores.map((color, index) => 
          <Tarjeta key={index} color={color} deleteColor={deleteColor}/>
        )} 
        
    </div>
  )
}

export default ListaColores