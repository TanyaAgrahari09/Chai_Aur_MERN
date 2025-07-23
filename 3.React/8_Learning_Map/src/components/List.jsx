
const List = ({list})=>{

    return (
      <>
        {!list || list.length === 0? <h2>No list here!</h2>
                                : <h2 className="text-xl mt-5 ml-5">Here the list is----> </h2>
        }

        { list && list.length > 0 && <ol className="list-decimal ml-10 mt-5 text-xl" >
            {
                list.map((topic)=>{
                   return <li>{topic}</li>
                })
            }
        </ol>}
        
        


        {/* {topics.map((topic)=>{
            return (
              <ul className="list-disc ml-5 ">
                <li>{topic}</li>
              </ul>
            );
        })} */}
        {/* <ul className="list-disc">
          <li>Creating project by CRA</li>
          <li>Creating Project by Vite</li>
          <li>Components</li>
          <li>CSS Library: Bootstrap</li>
          <li>Created todo UI using Bootstrap</li>
          <li>Luicide : Icons Library</li>
        </ul> */}

        
      </>
    );
}
export default List;