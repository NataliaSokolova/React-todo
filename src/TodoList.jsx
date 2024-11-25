import React from 'react'
import TodoListItem from './TodoListItem';


const todoList = [
    { id: 1, title: "Complete assignment" },
    { id: 2, title: "Go grocery shopping" },
    { id: 3, title: "Exercise for 30 minutes" }
  ];
   
  
function TodoList (props) {
  return (
    <ul>
    {props.todoList.map((todo,index) => (
    <TodoListItem key = {index} todo = {todo}/>

           ))}

    </ul>
  )
}

export default TodoList;

