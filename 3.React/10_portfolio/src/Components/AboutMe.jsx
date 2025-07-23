import { User } from 'lucide-react'
import Section from './Section'


const AboutMe = () => {
  return  <div className='mt-7'>
    <Section  icon={<User/>} SectionTitle="About Me"> <p>
  I am passionate about creating user-friendly and efficient web applications. Seeking opportunities to learn and grow in a dynamic tech environment. 
</p></Section>
  </div>
}

export default AboutMe;