import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


 

function App() {
const [newTodo, setNewTodo] = React.useState('relax');

const [todoList, setTodoList] = React.useState([]);


  return (
    <div>
       <h1>My Todo App</h1>
       <TodoList todoList = {todoList}/>
       <AddTodoForm onAddTodo={setNewTodo} />
       <p>{newTodo}</p>
      
    </div>   
  );
}

    


  export default App;
