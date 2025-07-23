

import Section from './Section'
import {  Globe } from 'lucide-react'
import { Linkedin } from 'lucide-react';
import SocialMedia from './SocialMedia';
import { Github } from 'lucide-react';


const Contact = () =>{

    const socialLinks =[
        {icon:<Linkedin/>,title: "Linkedin" ,url:"http://www.linkedin.com/in/tanya-agrahari"},{icon:<Github />,title: "Github", url:"https://github.com/AgravanshiTanya"},
        ]
    return <div className='pb-6'>
        <Section icon={< Globe/>} SectionTitle="Contact & Social Media">
        <p className=' text-gray-800 mb-4'>
            Email: tanyaagrahari09@gmail.com <br/>
            Phone: +91 6392884929
        </p>
        {socialLinks.map(social => <SocialMedia icon={social.icon} title={social.title} key={social.title}url={social.url}/>)}
        
    </Section>
    </div>
 }
 export default Contact;