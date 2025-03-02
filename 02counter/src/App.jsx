import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  
  
 const Addvalue=() => {
    console.log("clicked" , counter)
    
    setCounter(counter + 1)
  }
  const Decreasevalue=() => {
    console.log("clicked" , counter)
    
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h2>Counter value: {counter} </h2>

      <button
      onClick={Addvalue}
      >Addvalue</button>
      <button 
      onClick={()=> setCounter(counter -1)}>Decrease Value</button>
    </>
  )
}

export default App
