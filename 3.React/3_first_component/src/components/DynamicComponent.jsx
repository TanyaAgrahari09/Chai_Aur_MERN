
const DynamicComponent = ()=>{
    const name = "Tanya";
    const marks=[82,79,78,88,83];
    const calPercent = ()=>{
        let sum=0;
        for(let i =0; i<marks.length;i++){
            sum +=marks[i];
        }
        return sum/marks.length;
    }

    return(
        <p>{name} scored {calPercent()}% in her intermediate exam.</p>
    )
}

export default DynamicComponent;