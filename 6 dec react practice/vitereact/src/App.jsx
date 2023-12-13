import { useState } from "react"
import Myfunc from "./script"

function App() {
const [count, setcount] = useState(0)
  return (
    <>
    <Myfunc/>
    <p>tailwind test</p>
    </>
  )
}

export default App
