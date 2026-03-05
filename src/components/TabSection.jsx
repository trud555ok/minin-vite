import Button from "./Button/Button"

export default function TabSection({isActive, onChenge}){
    return(
        <section>
            <Button isActive={isActive === 'mein'} onClick={() => onChenge('mein')}>Главная</Button>
            <Button isActive={isActive === 'bac'} onClick={() => onChenge('bac')}>Обратная связь</Button>
        </section>
    )
}