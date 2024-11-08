import React from 'react'


const todoList = [
    { id: 1, title: "Complete assignment" },
    { id: 2, title: "Go grocery shopping" },
    { id: 3, title: "Exercise for 30 minutes" }
  ];
   
  
const TodoList = () => {
  return (
    <div>
      
      <ul>
       {todoList.map((todo) => (
       <li key={todo.id}>{todo.title} </li>
     
       ))}
       
      </ul>
    </div>
  )
}

export default TodoList;

