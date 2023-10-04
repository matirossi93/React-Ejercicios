import React, { useState, useEffect } from 'react'
import './ejercicio6.css'
import ListaColores from './ListaColores';


const Ejercicio6 = () => {

  let coloresLocalStorage = JSON.parse(localStorage.getItem("listColors"))  || [];

  const [color, setColor] = useState("");
  const [listaColores, setListaColores] = useState(coloresLocalStorage);

  useEffect(() => {
    localStorage.setItem("listColors", JSON.stringify(listaColores))
  
  }, [listaColores])
  

  const agregarColor = (e) => {
    e.preventDefault();
    setListaColores([...listaColores, color]);
    setColor("");
  }

  const colorFondo = {
    backgroundColor: `${color}`
  
  }

  const deleteColor = (colores) => {
    let _listColores = listaColores.filter((item) => {
      return item !== colores;
    } )
    setListaColores(_listColores)
    console.log(listaColores);
  }

  

  return (
    <>
      <div className='d-flex flex-column align-items-center'>
        <h3 className='mb-4 mt-4'>Administrar Colores</h3>
          <form onSubmit={agregarColor} className='d-flex align-items-center'>
            <div className="caja border me-5" style={colorFondo}>

            </div>
            <input onChange={(e) => {setColor(e.target.value)

              }} type="text" placeholder='Ingresar Color' className='h-25' value={color}/> 
            <button className='btn-primary ms-2 '>Ingresar</button>
          </form>
      </div>
      <div>
        <ListaColores setListaColores={setListaColores} listaColores={listaColores} deleteColor={deleteColor}/>   
        
      </div>
    </>
  )
}

export default Ejercicio6