import Props from "./Props"


const Card = () => {
  return (
    <div className="my-3 py-3 flex text-center ">
        <div className="h-30 w-80 border-2 border-blue-400 my-3 mx-2 py-3 ">
             <Props name={"Nayan Mia"} age={22} profession={"Junior Web Developer"} />
        </div>
        <div className="h-30 w-80 border-2 border-blue-400 my-3 mx-2 py-3 ">
             <Props name={"Md Rasel"} age={29} profession={"Senior Web Developer"} />
        </div>

         <div className="h-30 w-80 border-2 border-blue-400 my-3 mx-2 py-3 ">
             <Props name={"Nirob Hasan"} age={27} profession={"Software Engineer"} />
        </div>
        <div className="h-30 w-80 border-2 border-blue-400 my-3 mx-2 py-3 ">
             <Props name={"Rakib"} age={32} profession={"HR"} />
        </div>
    
    </div>
  )
}

export default Card
