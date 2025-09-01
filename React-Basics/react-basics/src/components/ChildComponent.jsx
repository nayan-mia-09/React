


// const ChildComponent = ({name , onClick}) => {
//   return (
//     <div className="border p-4 m-2 bg-blue-300 w-1/2 mx-auto">
//       <h4>Name: {name}</h4>
//       <button  className="mt-2 px-4 py-2 bg-amber-500 text-white rounded" onClick={() => onClick(name)}>Say Hello</button>
//     </div>
//   )
// }

// export default ChildComponent




const ChildComponent = ({name , onClick}) => {
  return (
    <div className="border p-4 m-2 bg-blue-300 w-1/2 mx-auto">
      <h4>Name: {name}</h4>
      <button className="mt-2 px-4 py-2 bg-amber-500 text-white rounded" onClick={() => onClick(name)}>Say Hello</button>
    </div>
  )
}

export default ChildComponent

