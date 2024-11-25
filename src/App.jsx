import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


 

function App() {
const [newTodo, setNewTodo] = React.useState('relax');

  return (
    <div>
       <h1>My Todo App</h1>
       <TodoList />
       <AddTodoForm onAddTodo={setNewTodo} />
       <p>{newTodo}</p>
      
    </div>   
  );
}

    


  export default App;
