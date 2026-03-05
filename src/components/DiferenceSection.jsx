import Button from "./Button/Button"
import { useState } from 'react'
import { declarations } from "../data"


export default function DiferenceSection(){
    const [content, setContent] = useState(null)
    
        function clickListener(str){
          setContent(str)
          console.log(str)  //старое значение, изменение будет когда перерисуется компонент
        }
    
    return (
        <section>
        <h3>Другая секция</h3>
        
        <Button isActive = {content === 'button1'} onClick={() => clickListener('button1')}>Робота</Button>
        <Button isActive = {content === 'button2'} onClick={() => clickListener('button2')}>Отдых</Button>
        { content ? <p>{declarations[content]}</p>: <div>ничего нету</div>} 
        { content && <p>{declarations[content]}</p>} 
        { !content && <p>нету контента</p>} 
        
      </section>
    )
}