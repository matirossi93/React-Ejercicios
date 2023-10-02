import React, { useEffect } from 'react'
import { useState } from 'react'

const Ejercicio2 = () => {

  const [msje, setMsje] = useState("my friend");

  return (
    <>
      <h1>Hello {msje}</h1>
      <button onClick={() => setMsje("my friend (state changed)")}>Click</button>
    </>
  )
}

export default Ejercicio2