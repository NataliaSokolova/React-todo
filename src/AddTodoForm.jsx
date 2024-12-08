import React, { useState } from "react";

export default function AddTodoForm({addTodo}) {

  const [todoTitle, setTodoTitle] = useState("");

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    console.log('newTodoTitle: ', newTodoTitle);
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
  
    const todoTitle = event.target.title.value;
    addTodo({ title: todoTitle, id: Date.now() });
    console.log('todoTitle: ',todoTitle);
    setTodoTitle("");
   //  const trimmedTitle = todoTitle.trim(); 
   //  if (!trimmedTitle) {
   //    alert("Todo title cannot be empty!");
   //    return;
   //  }
  
  }
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle"></label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        placeholder="Enter todo title"
        value={todoTitle}
        onChange={handleTitleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
