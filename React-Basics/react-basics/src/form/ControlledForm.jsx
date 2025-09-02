// import { useState } from "react"

import { useState } from "react"


// const ControlledForm = () => {

//     const [name , setName] = useState("")
//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         console.log(`Name: ${name}`)
//     }
//   return (
//     <div className="border p-4 m-2 bg-blue-100 w-1/2 mx-auto gap-2">
//         <form onSubmit={handleSubmit}>
//             <input  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter text" type="text" value={name}  onChange={(e)=> setName(e.target.value)}/>
//             <button className="mt-2 px-4 py-2 bg-amber-500 text-white rounded cursor-pointer ms-1.5" type="submit" value={name}>Submit</button>
//         </form>
      
//     </div>
//   )
// }

// export default ControlledForm




const ControlledForm = () => {
    const [name , setName] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(`Name: ${name}`)
    }
  return (
    <div className="border p-4 m-2 bg-blue-100 w-1/2 mx-auto">
        <form onSubmit={handleSubmit}>
            <input className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter text" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <button className="mt-2 px-4 py-2 bg-amber-500 text-white rounded cursor-pointer ms-1.5" type="submit" value={name}>Submit</button>
        </form>
      
    </div>
  )
}

export default ControlledForm
