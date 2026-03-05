import './App.css'
import Header from './components/Header'
import TeacherSection from './components/TeacherSection'
import DiferenceSection from './components/DiferenceSection'
import TabSection from './components/TabSection'
import FeedBackSection from './components/FeedBackSaction'
import { useState } from 'react'



function App() {
  const [bac, setBac] = useState('bac')
  return (
    <>
      <Header />
      <TabSection isActive={bac} onChenge={(ac)=>setBac(ac)}/>
      {console.log(bac)}
      { bac === 'mein' ? 
        <>
          <TeacherSection />
          <DiferenceSection /> 
        </>
        :
          <FeedBackSection/>
      }
      

      
    </>
  )
}

export default App
