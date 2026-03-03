import './App.css'
import Button from './components/Button/Button'
import Header from './components/Header'
import WayToTeach from './components/WayToTeach'
import {ways, declarations} from './data'
import { useState } from 'react'

function App() {
  const [content, setContent] = useState(null)
  // 'нажми на кнопку' - начальное значение
  // content - значение текущее
  // setContent - функция для изменения значения



    function clickListener(str){
      setContent(str)
      console.log(str)  //старое значение, изменение будет когда перерисуется компонент
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
        
        <Button isActive = {content === 'button1'} onClick={() => clickListener('button1')}>Робота</Button>
        <Button isActive = {content === 'button2'} onClick={() => clickListener('button2')}>Отдых</Button>
        { content ? <p>{declarations[content]}</p>: <div>ничего нету</div>} 
        { content && <p>{declarations[content]}</p>} 
        { !content && <p>нету контента</p>} 
        
      </section>
    </div>
  )
}

export default App
