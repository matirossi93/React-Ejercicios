import React, { useState } from 'react'
import "./ejercicio8.css"

const Ejercicio8 = () => {

    const [formData, setFormData] = useState({
        name: "",
        apellido: "",
        email:"",
})

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]:value});
    

};

const submit = (e) => {
    e.preventDefault();
    const validarCorreoElectronico = (correo) => {
        const expresionRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return expresionRegular.test(correo);
      };

    if (formData.name.length < 3 || formData.apellido.length < 3) {
        alert("Nombre o Apellido muy cortos")
    } else if (!validarCorreoElectronico(formData.email)) {
        alert('Correo electrónico inválido');
        return;
      } else if (!formData.name|| !formData.apellido || !formData.email) {
        alert('Completar todos los datos');
       
      } else {
        alert("Datos cargados")
      }
      console.log(formData)
      
}

  return (
    <div className='d-flex justify-content-center align-items-center contenedor'>
        <form className='formulario'>
            <div class="mb-3">
                <label for="name" class="form-label">Nombre</label>
                <input type="text" class="form-control" id='name' onChange={handleChange} value={formData.name} name='name'/>
                <label for="apellido" class="form-label">Apellido</label>
                <input type="text" class="form-control" id='apellido' value={formData.apellido} onChange={handleChange} name='apellido'/>
                <label for="email" class="form-label">Direccion de Email</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange} name='email' value={formData.email}/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <button type="submit" onClick={submit} class="btn btn-primary">Enviar</button>
        </form>
    </div>
  )
}

export default Ejercicio8;