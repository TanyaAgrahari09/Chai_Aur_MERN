import Button from "./Button";

const AddTodo = () => {
  const addHandler = ()=>{
    console.log(`Trying to add item`);
  }
  return (
    <div className="container ">
      <div className="row my-row">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Enter todo here"
          />
        </div>
        <div className="col-3">
          <input type="date" className="form-control" />
        </div>
        <div className="col-2">
          <Button btnType="success" btnText="Add" handler={addHandler}/>
        </div>
      </div>
    </div>
  );
};
export default AddTodo;
