

const Child = ({onSend}) => {
  return (
    <div className="border p-4 m-2 bg-blue-300 w-1/2 mx-auto">
      <button className="mt-2 px-4 py-2 bg-amber-500 text-white rounded cursor-pointer" onClick={() => onSend("Hello from Child")}>Send Message from Child</button>
    </div>
  )
}

export default Child
