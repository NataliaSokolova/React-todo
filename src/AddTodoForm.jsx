import React from 'react'

export default function AddTodoForm() {
  return (
     <form>
        <label htmlFor="todoTitle"></label>
        <input id = "todoTitle"></input>
        <button type = "submit">Add</button>
     </form>
  );
}
