import './Button.css'

export default function Button({isActive,children, onClick}){
    const enterMouse = () => console.log('vxod') 
    return (<button 
                className= {isActive ? 'button active':'button'} 
                onClick={onClick} 
                onMouseEnter={enterMouse}
                // onDoubleClick={() => console.log('2click')}
            >{children}</button>)
}