import { useState } from "react"

const Counter = () => {
     const [count, setCount] = useState(0)
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">



      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center gap-6 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex flex-col items-center gap-4 mt-10 ">
      <h2 className="text-4xl font-bold text-indigo-800 mb-5">Counter App</h2>
      <p className="text-2xl font-bold text-gray-800">Counter: {count}</p>
      <div className="flex gap-2">
      <button className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer" onClick={() => setCount(count+ 1)}>+</button>
      <button className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer" onClick={() => setCount(count - 1)}>-</button>
      <button className="px-4 py-2 bg-gray-500 text-white rounded cursor-pointer" onClick={() => setCount(0)}>Reset</button>
      </div>
      
    </div>
    </div>

    </div>
    
  )
}

export default Counter
