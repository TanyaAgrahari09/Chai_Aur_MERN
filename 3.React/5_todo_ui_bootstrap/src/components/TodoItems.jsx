import TodoItem from "./TodoItem";

const TodoItems = () => {
  const todoItems = [
    { id: 1, todoText: "Study", todoDate: "21-July-2025" },
    {
      id: 2,
      todoText: "Skipping",
      todoDate: "21-July-2025",
    },
    {
      id: 3,
      todoText: "Watch standups",
      todoDate: "21-July-2025",
    },
    {
      id: 4,
      todoText: "Read book",
      todoDate: "21-July-2025",
    },
  ];
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate} />
      ))}
    </>
  );
};
export default TodoItems;
