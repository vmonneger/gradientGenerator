import React, { useState, useEffect } from 'react';

export default function InputColor({name, getColor, initColor}) {
  const [color, setColor] = useState(initColor)

  useEffect(() => {
    getColor(color)
  })

  return(
    <>
      <label forhtml={name}>{name}</label>
      <input style={{width: "100%"}} type="color" id={name} name={name} value={color} onChange={e => setColor(e.target.value)} />
    </>
  )
}