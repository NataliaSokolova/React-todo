import React, { useState } from 'react'

export default function AddTodoForm(props) {
const [title, setTitle] = useState('');

   function handleAddTodo(event){
      event.preventDefault();

      const todoTitle = event.target.title.value;
      props.onAddTodo(todoTitle);
      console.log(todoTitle);
      event.target.reset();
   }
  return (
     <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle"></label>
        <input
        type="text"
        id="todoTitle"
        name="title" // name attribute is required to access this field in event.target
        placeholder="Enter todo title"
      />
        <button type = "submit">Add</button>
     </form>
  );
}
