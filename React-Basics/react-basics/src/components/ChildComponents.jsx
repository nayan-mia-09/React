

const ChildComponents = ({name, age, city}) => {
  return (
    <div>
      <div className="border-2 border-b-amber-600 bg-blue-300 w-50 m-auto gap-2 flex-4">
        <h4>Name: {name}</h4>
        <p>Age: {age}</p>
        <p>City: {city}</p>
      </div>
    </div>
  )
}

export default ChildComponents
