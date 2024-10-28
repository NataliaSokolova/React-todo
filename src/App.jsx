import React from 'react';

const todoList = [
  { id: 1, title: "Complete assignment" },
  { id: 2, title: "Go grocery shopping" },
  { id: 3, title: "Exercise for 30 minutes" }
];
   


function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
       {todoList.map((todo) => (
       <li key={todo.id}>{todo.title} </li>
     
       ))}
       
      </ul>
    </div>
  );
}
    

export default App;
