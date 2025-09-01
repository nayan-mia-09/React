

const Onclick = () => {
    const handleClick = () =>{
        alert(`Button Clicked`)
    }
  return (
    <div className="border p-4 m-2 bg-blue-300 w-1/2 mx-auto">
      <button className="mt-2 px-4 py-2 bg-amber-500 text-white rounded cursor-pointer" onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Onclick
