


const Section = ({icon,children,SectionTitle}) => {
  return  <div className='mx-5 mb-12'>
    
    <div className='flex my-3 items-center mb-6'>
        {icon}
        <h1 className='font-bold text-2xl mx-2'>{SectionTitle}</h1>
    </div>
     {children}
    </div>
}

export default Section;