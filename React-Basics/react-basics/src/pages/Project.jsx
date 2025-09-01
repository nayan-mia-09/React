import { useState } from "react"
import Button from "./Button";


const Project = () => {
    const [count , setCount] = useState(0);

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count - 1);
    const handleReset = () => setCount(0)
    const handleAlert = () => {alert(`Current count is ${count}`)}
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
         <h2 className="text-2xl font-semibold mb-4 text-gray-800">Mini Project : Button Components</h2>
         <p className="text-lg mb-6 text-gray-600">Counter: {count}</p>

       <div  className="flex justify-center flex-wrap gap-2">
        <Button text="Increment" color="green" onClick={handleIncrement}/>
         <Button text="Decrement" color="blue" onClick={handleDecrement}/>
          <Button text="Reset" color="red" onClick={handleReset}/>
           <Button text="Show Alert" color="orange" onClick={handleAlert}/>
           <Button text="Default Button"  onClick={() => alert(`Default Clicked !`)}/>

      </div>
        
      </div>
        
      
    </div>
  )
}

export default Project
