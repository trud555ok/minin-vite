import classes from './Button.module.css'

export default function Button({isActive,children, onClick}){
    const enterMouse = () => console.log('vxod') 
    console.log(classes)
    return (<button 
                className= {isActive ? `${classes.button} ${classes.active}`: classes.button} 
                onClick={onClick} 
                onMouseEnter={enterMouse}
                // onDoubleClick={() => console.log('2click')}
            >{children}</button>)
}