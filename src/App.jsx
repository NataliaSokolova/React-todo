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

  return (
    <>
      <h1>My Todo App</h1>
      <TodoList todoList={todoList} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
