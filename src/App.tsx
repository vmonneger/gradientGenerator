import './App.css';
import Input from './Component/Input'
import Card from './Component/Card'
import InputColor from './Component/InputColor'
import InputRange from './Component/InputRange'
import GradientBlock from './Component/GradientBlock'
import React, { useState, useEffect } from 'react';

function App() {
  const [color1, setColor1] = useState()
  const [color2, setColor2] = useState()
  const [color3, setColor3] = useState()
  const [breakPoint1, setBreakPoint1] = useState()
  const [breakPoint2, setBreakPoint2] = useState()
  const [breakPoint3, setBreakPoint3] = useState()
  const [linearGradient, setLinearGradient] = useState('')
  

  useEffect(() => {
    if (color1 && color2 && color3) {
    const gradient = `${color1 + ' ' + breakPoint1 + '%, '+ color2 + ' ' + breakPoint2 + '%, ' + color3 + ' ' + breakPoint3 + '%'}`
    setLinearGradient(gradient)
    }
    if (breakPoint1 && breakPoint2 && breakPoint3) {
      
    }
  }, [color1, color2, color3, breakPoint1, breakPoint2, breakPoint3])

  return (
    <div className="App">
      <div className="container">
        <Card>
          <Input name={"Breakpoint 1"} initValue="0" getBreakPoint={setBreakPoint1}/>
          <InputColor name={"color 1"} initColor="#020024" getColor={setColor1} />
        </Card>
        <Card>
          <Input name={"Breakpoint 2"} initValue="50" getBreakPoint={setBreakPoint2} />
          <InputColor name="color 2" initColor="#79093c" getColor={setColor2} />
        </Card>
        <Card>
          <Input name={"Breakpoint 3"} initValue="100" getBreakPoint={setBreakPoint3} />
          <InputColor name="color 3" initColor="#ffd600" getColor={setColor3} />
        </Card>
        <Card>
          <InputRange />
        </Card>
        <GradientBlock setLinearGradient={linearGradient}/>
        <h1>{color1} {breakPoint1}% {color2} {breakPoint2}% {color3} {breakPoint3}%</h1>
      </div>
    </div>
  );
}

export default App;
