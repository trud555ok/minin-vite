import { useState } from 'react'
import logo from '../../assets/react.svg'
import {styled} from 'styled-components'
// import './Header.css'


const Hed = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #c4b2b2;
`

export default function Header(){
    
        const [naw, setNaw] = useState(new Date())
        setInterval(() => setNaw(new Date()), 1000) 
    return(
        <Hed>
            <img src={logo} alt="" />
            <h1>Privet {naw.toLocaleTimeString()}</h1>
        </Hed>
    )
};