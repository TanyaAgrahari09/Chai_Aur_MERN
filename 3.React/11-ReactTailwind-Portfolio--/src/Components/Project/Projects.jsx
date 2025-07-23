import Section from "../Section";
import { Briefcase } from "lucide-react";
import Project from './Project'

const Projects = () => {
  const projectList = [
    {
      title: "E-commerce Platform",
      desc: "Developed a fully-functional e-commerce platform with authentication, product management, and payment integration.",
      techUsed: ["React", "Node.js", "MongoDB", "Stripe"],
    },

    {
      title: "Social MEdia Dashboard",
      desc: "Created a responsive dashboard for social media analytics, featuring real-time data visualization and reporting.",
      techUsed: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    },
  ];

  return (
    <Section icon={<Briefcase />} SectionTitle="Projects">
      {projectList.map(project => <Project title={project.title} desc={project.desc} techUSed={project.techUsed} />)}
    </Section>
  );
};
export default Projects;
