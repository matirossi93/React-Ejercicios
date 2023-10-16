import React, { useEffect, useState } from 'react'
import ListaCitas from './ListaCitas';

const Ejercicio9 = () => {

  const listaCitasLocalStorage = JSON.parse(localStorage.getItem("ListCitas")) || {};

  const base = {
    mascota: "",
    duenio: "",
    fecha: "",
    hora: "",
    sintomas: "",
  }

  const [data, setData] = useState(base)

  const [listaCitas, setListaCitas] = useState([listaCitasLocalStorage])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({...data, [name]:value});

    console.log(data);
    

};

useEffect(() => {
  localStorage.setItem("ListCitas", JSON.stringify(listaCitas));
}, [listaCitas]);

const dataSubmit = (e) => {
  e.preventDefault()
  setListaCitas([...listaCitas, data]);
  setData("");
  console.log(listaCitas)
}

const deleteCita = (citas) => {
  let _listaCitas = listaCitas.filter((item) => {
    return item !== citas;
  } )
  setListaCitas(_listaCitas)
  
}


  return (
    <>
    <div className='d-flex flex-column align-items-center'> 
        <h1>Administrador pacientes de veterinaria</h1>
        <div>
          <h3>Llenar el formulario para crear una cita</h3>
          <form className='d-flex flex-column m-2 mt-3' onSubmit={dataSubmit}>
            <div className='mb-3'>
              <label htmlFor="mascota" className='me-2'>Nombre de la mascota</label>
              <input type="text" id='mascota' onChange={handleChange} name='mascota' value={data.mascota} />
            </div>
            <div className='mb-3'>
              <label htmlFor="duenio" className='me-2'>Nombre de dueño</label>
              <input type="text" id='duenio' onChange={handleChange} name='duenio' value={data.duenio} />
            </div>
            <div className='mb-3'>
              <label htmlFor="fecha" className='me-2'>Fecha</label>
              <input type="date" id='fecha' className='me-4' onChange={handleChange} value={data.fecha} name='fecha'/>
              <label htmlFor="hora" className='me-2'>Hora</label>
              <input type="time" id='hora' onChange={handleChange} value={data.hora} name='hora' />
            </div>
            <div>
              <label htmlFor="sintomas" className='me-2'>Sintomas</label>
              <input type="text" id='sintomas' className='w-50 mb-5' onChange={handleChange} value={data.sintomas} name='sintomas'/>
            </div>
            <button className='w-50 align-self-center'>Agregar nueva cita</button>
          </form>
        </div>
      </div>
      <div>
        <ListaCitas listaCitas={listaCitas} deleteCita = {deleteCita}/>
      </div>
    </>
  )
}

export default Ejercicio9