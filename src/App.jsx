import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm'
 

function App() {
  return (
    <div>
       <h1>My Todo App</h1>
       <TodoList />
       <AddTodoForm />
    </div>   
  );
}
    

export default App;
