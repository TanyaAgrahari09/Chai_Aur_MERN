import Section from './Section'
import {BookOpenCheck } from 'lucide-react'
import Graduation from './Graduation'

const Education = () =>{
    return <Section icon={<BookOpenCheck/>} SectionTitle="Education">
        <Graduation title="Bachelor of Technology in Computer Science" school="SHEAT College of Engineering & Management" year="| 2021-2025"/>

        <Graduation title="Class XII" school="Vidya Sanskar Public School | CBSE Board" year="|2018-2020"/>

        <Graduation title="Class X" school="Vidya Sanskar Public School | CBSE Board" year="|2016-2018"/>
    </Section>
 }
 export default Education;