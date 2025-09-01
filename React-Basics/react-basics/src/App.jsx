
import ParentComponents from './components/ParentComponent'
import Onclick from './components/Onclick'
import Onchange from './components/Onchange'
import Parent from './components/Parent'

const App = () => {
  return (
    <div>
      <h1>Props Deep Dive</h1>

      <ParentComponents/>
      <hr />
      <Onclick/>

      <Onchange/>

      <hr />
      <Parent/>
    </div>
  )
}

export default App
