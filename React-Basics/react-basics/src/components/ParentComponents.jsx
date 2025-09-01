
import ChildComponents from './ChildComponents'

const ParentComponents = () => {
  return (
    <div >
        <div>
            <ChildComponents name={"Rakib"} age={22} city={"Dhaka"}/>
            <ChildComponents name={"Rasel"} age={25} city={"Khulna"}/>
        </div>
      
    </div>
  )
}

export default ParentComponents
