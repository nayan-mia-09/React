
import Child from './Child'

const Parent = () => {
    const handleMessage = (msg) =>{
        alert(`Child says: ${msg}`)

    }
  return (
    <div>
      <Child onSend={handleMessage}/>
    </div>
  )
}

export default Parent
