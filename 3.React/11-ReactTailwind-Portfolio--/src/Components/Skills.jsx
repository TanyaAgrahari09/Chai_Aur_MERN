import Section from './Section'
import { Code } from 'lucide-react'
import Pill from './Pill'


const Skills = () =>{

    const SkillsTitle = ["Java","HTML","CSS","JS","Bootstrap & Tailwind","React.js", 
        "Node.js", "Git & Github","VS Code"]

    return <Section icon={<Code/>} SectionTitle="Skills">
        {SkillsTitle.map(title =><Pill key={title} title={title}/>)}
        
    </Section>
 }
 export default Skills;