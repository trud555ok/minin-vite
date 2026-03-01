import './App.css'
import Button from './components/Button/Button'
import Header from './components/Header'
import WayToTeach from './components/WayToTeach'
import {ways} from './data'
import { useState } from 'react'

function App() {
  const [content, setContent] = useState('нажми на кнопку')
  // 'нажми на кнопку' - начальное значение
  // content - значение текущее
  // setContent - функция для изменения значения



    function clickListener(str){
        console.log(str)
        setContent(str)
    }

  return (

    <div className="#">
      <Header />
      <ul>
        <WayToTeach name = {ways[0].name} skils = {ways[0].skils} age = {ways[0].age}/>
        <WayToTeach {...ways[1]} />
      </ul>
      <section>
        <h3>Другая секция</h3>
        
        <Button onClick={() => clickListener('button1')}>Робота</Button>
        <Button onClick={() => clickListener('button2')}>Отдых</Button>
        <p>{content}</p>
      </section>
    </div>
  )
}

export default App
