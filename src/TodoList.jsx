import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({todoList}) {
  return (
    <ul>
      {todoList.map((todo, index) => (
        <TodoListItem key={index} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
