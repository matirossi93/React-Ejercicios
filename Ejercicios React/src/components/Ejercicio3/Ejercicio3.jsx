import React, { useEffect } from 'react'
import { useState } from 'react'
import ListaTareas from './ListaTareas';

const Ejercicio3 = () => {

  let tareasLocalStorage = JSON.parse(localStorage.getItem("listTask")) || [];

    const [task, setTask] = useState("");
    const [listTask, setListTask] = useState(tareasLocalStorage);

    useEffect(() => {
      localStorage.setItem("listTask", JSON.stringify(listTask));
    }, [listTask]);

    const agregarTask = (e) => {
        e.preventDefault()
        setListTask([...listTask, task]);
        setTask("");
    }
 
    const deleteTask = (nameTask) => {
      let _taskList = listTask.filter((item) => {
        return item !== nameTask;
      });
      setListTask(_taskList);
    }

  return (
    <div className='d-flex align-items-center flex-column'>
        <h1 className='mb-4'>Bienvenido</h1>
        <h4 className='mb-3'>Ingresa tus tareas</h4>
        <form onSubmit={agregarTask}>
            <input onChange={(e) => setTask(e.target.value)} type="text" placeholder='Tarea' value={task}/>
            <button className='btn'>Ingresar</button>
        
        </form>

        <ListaTareas listTask={listTask} deleteTask={deleteTask} />
    </div>
  )

}


export default Ejercicio3