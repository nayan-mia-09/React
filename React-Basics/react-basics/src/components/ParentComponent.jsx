
// import ChildComponent from './ChildComponent'

import ChildComponent from "./ChildComponent"
import Message from "./Message"

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

    const message = [
        {text: "Hello, Ajom Khan", color: "purple"}, 
        {text: "Hello, Rahim Uddin", color: "orange"},
         {text: "Hello, Mahim" , color: "blue"}]
  return (
    <div>
      <ChildComponent name={"Fahim"} onClick={handleClick}/>
      <ChildComponent name={"Labib"} onClick={handleClick}/>
      <hr />

      <br />
      <Message text={"Hello, User"} color={"blue"}/>
      <Message text={"Welcome to our Website"} color={"green"}/>
      <Message text={"Props are awsome"} color={"red"}/>
      <br />
      <hr />

      <Message text={"Hello , Fahim"} color={"blue"}/>
      <Message text={"Welcome to React"} color={"green"}/>
      <Message text={"Props are awsomes"} color={"red"}/>

      <hr />
      <br />
     <div>
        {message.map((msg, index) =>(<Message key={index} text={msg.text} color={msg.color}/>))}
     </div>


    </div>
  )
}

export default ParentComponent
