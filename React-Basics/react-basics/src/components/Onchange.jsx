import React from 'react'

const Onchange = () => {
    const handleChange = (e) => {
       console.log("Input Value", e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form Submitted !`)

    }
  return (
    <div className='border p-4 m-2 bg-blue-300 w-1/2 mx-auto'>
        <form onSubmit={handleSubmit}>
            <input className="block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" type="text" placeholder='type something'  onChange={handleChange}/>

      <button className="mt-2 px-4 py-2 bg-amber-500 text-white rounded cursor-pointer" type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default Onchange
