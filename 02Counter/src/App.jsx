import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)


  const increaseValue = () => {
    // console.log("value added" , counter)
    // counter++;
    if(counter < 20)
      setCounter(counter+1)
  }
  const decreaseValue = () => {
    if(counter > 0)
      setCounter(counter-1)
    // console.log("value added" , counter)


  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={increaseValue}>Add Value {counter}</button>
      <br/>
      <button onClick={decreaseValue}>Decrease Value {counter}</button>
    </>
  )
}

export default App
