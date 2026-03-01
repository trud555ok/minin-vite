import './App.css'
import Header from './components/Header'
import WayToTeach from './components/WayToTeach'
import {ways} from './data'

function App() {
  

  return (

    <div className="#">
      <Header />
      <ul>
        <WayToTeach name = {ways[0].name} skils = {ways[0].skils} age = {ways[0].age}/>
      </ul>
    </div>
  )
}

export default App
