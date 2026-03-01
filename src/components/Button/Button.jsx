import './Button.css'

export default function Button({children, onClick}){
    const enterMouse = () => console.log('vxod') 
    return (<button 
                className='button' 
                onClick={onClick} 
                onMouseEnter={enterMouse}
                // onDoubleClick={() => console.log('2click')}
            >{children}</button>)
}