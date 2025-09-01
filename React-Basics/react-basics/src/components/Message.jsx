

// const Message = ({text, color}) => {
//   return (
//     <div className={`p-4 m-2 text-white rounded`}
//       style={{ backgroundColor: color }}>
//         {text}
      
//     </div>
//   )
// }

// export default Message



const Message = ({text, color}) => {
  return (
    <div className={`p-4 m-2 text-white rounded`} style={{backgroundColor: color}}> 
      {text}
    </div>
  )
}

export default Message

