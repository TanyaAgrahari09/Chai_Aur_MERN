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
const todoItemsText = todoItems.map((item) => item.todoText);
console.log(todoItemsText);