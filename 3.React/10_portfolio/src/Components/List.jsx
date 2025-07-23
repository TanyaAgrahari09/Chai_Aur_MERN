const List = ({items}) => {
   return <ul className="list-disc list-inside ml-3 text-gray-800">
     {items.map(item =><li key ={item}>{item}</li>)}
   </ul>
}
export default List;