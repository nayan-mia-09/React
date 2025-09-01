
// import ChildComponent from './ChildComponent'

import ChildComponent from "./ChildComponent"

// const ParentComponent = () => {

//     const handleClick = (name) =>{
//         alert(`Hello, ${name} !`)
//     }
//   return (
//     <div>
//       <ChildComponent name={"Rakib"} onClick={handleClick}/>
//       <ChildComponent name={"Rasel"} onClick={handleClick}/>
//     </div>
//   )
// }

// export default ParentComponent




const ParentComponent = () => {
    const handleClick = (name) => {
        alert(`Hello, ${name}`)
    }
  return (
    <div>
      <ChildComponent name={"Fahim"} onClick={handleClick}/>
      <ChildComponent name={"Labib"} onClick={handleClick}/>
    </div>
  )
}

export default ParentComponent
