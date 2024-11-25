import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {

  const [todoList, setTodoList] = React.useState([]);

  function addTodo(newTodo) {
    setTodoList([newTodo, ...todoList]);
  }
  return (
    <div>
      <h1>My Todo App</h1>
      <TodoList todoList={todoList} />
      <AddTodoForm addTodo={addTodo} />
    
    </div>
  );
}

export default App;
