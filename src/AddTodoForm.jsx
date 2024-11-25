import React, { useState } from 'react'

export default function AddTodoForm(props) {
const [title, setTitle] = useState('');
const [todoTitle, setTodoTitle] = useState('');


   function handleTitleChange(event){
   const newTodoTitle = event.target.value;
   setTodoTitle(newTodoTitle);
   }


   function handleAddTodo(event){
      event.preventDefault();

      const todoTitle = event.target.title.value;
      props.onAddTodo(todoTitle);
      console.log(todoTitle);
      setTodoTitle("");
      //event.target.reset();
   }
  return (
     <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle"></label>
        <input
        type="text"
        id="todoTitle"
        name="title" // name attribute is required to access this field in event.target
        placeholder="Enter todo title"
        value = {todoTitle}
        onChange = {handleTitleChange}
      />
        <button type = "submit">Add</button>
     </form>
  );
}
