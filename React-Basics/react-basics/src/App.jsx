
import ParentComponents from './components/ParentComponent'
import Onclick from './components/Onclick'
import Onchange from './components/Onchange'
import Parent from './components/Parent'
import Button from './components/Button'
import Project from './pages/Project'
import ControlledForm from './form/ControlledForm'
import LoginForm from './form/LoginForm'

const App = () => {
  const handleSave = () =>{
    alert(`Save Clicked !`)
  }

  const handleDelete = () =>{
    alert(`Delete Clicked !`)
  }

  const handleUpdate = () =>{
    alert(`Update Cliked !`)
  }
  return (
    <div>
      <h1>Props Deep Dive</h1>

      <ParentComponents/>
      <hr />
      <Onclick/>

      <Onchange/>

      <hr />
      <Parent/>
      <hr />
      <br />
      <br />
      <Button text={"Save"} color='green' onClick={handleSave}/>
      <Button text={"Delete"} color='red' onClick={handleDelete}/>
      <Button text={"Update"} color='orange' onClick={handleUpdate}/>
      <Button text={"Default"}  onClick={() => alert(`Default Button !`)}/>
        <hr />

        <Project/>

        <hr />
        <ControlledForm/>
        <hr />
        <LoginForm/>
    </div>
  )
}

export default App
