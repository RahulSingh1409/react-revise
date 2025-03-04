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
    if (counter > 0){
      setCounter(counter - 1)
    }
    else{
      setValue(counter = 0)
    }
   
  }
  return (
    <>
      <h2>Counter value: {counter} </h2>

      <button
      onClick={Addvalue}
      >Addvalue</button>
      <button 
      onClick={Decreasevalue}>Decrease Value</button>
    </>
  )
}

export default App
