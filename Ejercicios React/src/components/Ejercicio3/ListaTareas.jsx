import React from 'react'
import Tarea from './Tarea';

const ListaTareas = ({listTask, deleteTask}) => {
  
    return (
    <ul className='mt-5'>
        {
            listTask.map((task, index) => <Tarea key={index} taskName={task} deleteTask={deleteTask}></Tarea>)

        }
    </ul>
  );
};

export default ListaTareas