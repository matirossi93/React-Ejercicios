import React from 'react'

const Tarea = ({ taskName, deleteTask}) => {
  return (
    <div className="d-flex justify-content-between mb-3 border p-1">
      {taskName}
      <i className="bi bi-x-circle-fill"></i>
      <button variant="outline-danger" onClick={() => deleteTask(taskName)} className='btn-danger ms-2'>Eliminar
      </button>
    </div>
  )
}

export default Tarea