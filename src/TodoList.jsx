import React from 'react'
import TodoListItem from './TodoListItem';


const todoList = [
    { id: 1, title: "Complete assignment" },
    { id: 2, title: "Go grocery shopping" },
    { id: 3, title: "Exercise for 30 minutes" }
  ];
   
  
function TodoList () {
  return (
    <ul>
    {todoList.map((todo) => (
    <TodoListItem key = {todo.id} todo = {todo}/>

           ))}

    </ul>
  )
}

export default TodoList;

