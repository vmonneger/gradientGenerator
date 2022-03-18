import React, { useState, useEffect } from 'react';

export default function Input({name, getBreakPoint, initValue}) {
  const [breakPoint, setBreakPoint] = useState(initValue)

  useEffect(() => {
    getBreakPoint(breakPoint)
  })

  return(
    <>
      <label forhtml={name}>{name}</label>
      <input type="number" id={name} name={name} min="0" value={breakPoint} onChange={e => setBreakPoint(e.target.value)}/>
    </>
  )
}