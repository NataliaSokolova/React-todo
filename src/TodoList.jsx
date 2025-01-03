import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({todoList, onRemoveTodo}) {
  return (
    <ul>
      {todoList.map((todo, index) => (
        <TodoListItem key={index} todo={todo} onRemoveTodo = {onRemoveTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
