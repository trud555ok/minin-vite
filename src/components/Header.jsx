import logo from '../assets/react.svg'



export default function Header(){
    const naw = new Date()

    return(
        <>
            <h1>Privet {naw.toLocaleTimeString()}</h1>
            <img src={logo} alt="" />
        </>
    )
};