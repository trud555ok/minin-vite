
import WayToTeach from './WayToTeach'
import { ways } from '../data'



export default function TeacherSection(){
    return (
        <section>
            <ul>
            {ways.map(w => <WayToTeach key={w.name} {...w}/>)}
            </ul>
      </section>
    )
}