import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel"

export default function AddTodoForm({addTodo}) {

  const [todoTitle, setTodoTitle] = useState("");

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    console.log('newTodoTitle: ', newTodoTitle);
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
      addTodo({ title: todoTitle, id: Date.now() });
    console.log('todoTitle: ',todoTitle);
    setTodoTitle("")
  
  }
  return (
    <form onSubmit={handleAddTodo}>
      
      <InputWithLabel
        id="todoTitle"
        type="text"
        value={todoTitle}
        placeholder="Enter todo title"
        name="title"
        onChange={handleTitleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
