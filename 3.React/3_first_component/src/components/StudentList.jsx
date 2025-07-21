
const StudentList =(props)=>{
    if (!props.students){
        return <p>No students.</p>
    }
    
   return <ol>
    {
        props.students.map(student=>
        <li>{student}</li>
        )
    }
   </ol>;
}
export default StudentList;