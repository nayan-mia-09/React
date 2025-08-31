import Card from "./components/Card"
import Footer from "./components/Footer"
import Greetings from "./components/Greetings"
import Header from "./components/Header"
import Parent from "./components/Parent"
import GreetEvent from "./event/GreetEvent"
import Greet from "./props/Greet"
import Person from "./props/Person"


function App() {

  return (
    <>
      <Header/>
      <Card/>

      <Parent/> <br />

      <Greetings name={"Anam"}/>
      <Greetings name={"Omor"}/>
      <Greetings name={"Ridoy"}/>
      <Greetings name={"Sakil"}/>

      <br />
      <Greet name={"Rabbil"} hname={"Royal Palace"}/>
      <Greet name={"Nahid"} hname={"Boom Flims"}/>
      <Greet name={"Prottoy"} hname={"Team Hurrican"}/>

      <br />
      <hr />
      <Person name={"Nabil"} roll={22} id={21219309973} city={"Dhaka"}/>
      <hr />
      <GreetEvent/>
      <Footer/>
    </>
  )
}

export default App
