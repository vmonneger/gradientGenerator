import React, { useState, useEffect } from 'react';

export default function InputRange({name, getRotation}) {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    getRotation(rotation)
  })

  return(
    <>
      <label forhtml={name}>Rotation</label>
      <input type="range" id={name} name={name} value={rotation} min="0" max="360" onChange={e => setRotation(e.target.value)} />
    </>
  )
}