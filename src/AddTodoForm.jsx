import React, { useState, useRef, useEffect } from "react";
import InputWithLabel from "./InputWithLabel"

export default function AddTodoForm({addTodo, todoList}) {

  const [todoTitle, setTodoTitle] = useState("");
  const inputRef = useRef(null);
  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
 
    setTodoTitle(newTodoTitle);
  }

  useEffect(() => {
    inputRef.current.focus();
  }, [todoTitle, todoList]);

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
        inputRef={inputRef}
        
      />
      <button type="submit">Add</button>
    </form>
  );
}
