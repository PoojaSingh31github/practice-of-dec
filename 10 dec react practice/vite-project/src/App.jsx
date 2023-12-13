import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let [counter, setCounter]= useState('')
  // let counter= 5;
  const addValue=()=>{
    // console.log("value added", Math.random());
    setCounter(counter++);
  }
  const removeValue=()=>{
    
    // console.log("value added", Math.random());
  setCounter(counter--)
  }
  return (
    <>
     <h1 className='bg-green-400'>hello</h1>
     <h2>counter value : {counter}</h2>
     <br />
     <button onClick={addValue}>add value</button>
     <button onClick={removeValue}>remove value</button>
    
    </>
  )
}

export default App
