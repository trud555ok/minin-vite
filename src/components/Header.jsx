import { useState } from 'react'
import logo from '../assets/react.svg'



export default function Header(){
    
        const [naw, setNaw] = useState(new Date())
        setInterval(() => setNaw(new Date()), 1000) 
    return(
        <>
            <h1>Privet {naw.toLocaleTimeString()}</h1>
            <img src={logo} alt="" />
        </>
    )
};