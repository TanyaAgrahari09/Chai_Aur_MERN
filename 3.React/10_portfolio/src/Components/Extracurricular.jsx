
import Section from './Section'
import { Award } from 'lucide-react'
import List from './List'


const Extracurricular = () =>{
    const items = [
        	"Organised  multiple college fest. ",
	"Participated in Coding Competitions at college level.", 
	"Participated in multiple tech workshops.", 
	"Ranked 3rd in Poster Presentation on topic ‘Autonomous Car’.", 
	"Ranked 2nd in marathon race in school at interschool level." 

    ];
    return <Section icon={<Award/>} SectionTitle="Extracurricular">
        <List items={items}></List>
    </Section>
 }
 export default Extracurricular;