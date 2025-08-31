

const GreetEvent = () => {
    const handleClick = () =>{
        alert(`Button Clicked`)
    }

    const handleButton = () =>{
        alert("Good Day to you !")
    }
  return (
    <>
    <button onClick={handleClick} className="bg-sky-500 hover:bg-sky-700 m-5 p-5">Click me</button>
    <button onClick={handleButton} className="bg-sky-500 hover:bg-sky-700 m-5 p-5">GoodBye</button>
      
    </>
  )
}

export default GreetEvent
