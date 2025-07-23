import List from './List'
import Section from './Section'
import { Heart } from 'lucide-react'

const Hobbies = () =>{
   const hobbies = ["Watching Cricket","Watching biographical movies","Reading Self-help books"];
   return <Section icon={<Heart/>} SectionTitle="Hobbies">
      <List items={hobbies}></List>
   </Section>
}
export default Hobbies;