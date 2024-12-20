import React, { useEffect, Fragment, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function useSemiPersistentState() {
  const [todoList, setTodoList] = React.useState(() => {
    const saved = localStorage.getItem("savedTodoList");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    console.log("useeffect", todoList);
  }, [todoList]);

  return [todoList, setTodoList];
}


function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  function addTodo(newTodo) {
    setTodoList([newTodo, ...todoList]);
  }

  function removeTodo(id){
   const updatedTodoList =  todoList.filter((todo)=>  todo.id  !== id);
   setTodoList(updatedTodoList);
  }

  return (
    <>
      <h1>My Todo App</h1>
      
      <AddTodoForm addTodo={addTodo} todoList={todoList}/>
      <TodoList todoList={todoList}  onRemoveTodo = {removeTodo} />
    </>
  );
}

export default App;
