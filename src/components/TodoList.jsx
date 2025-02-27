import React from "react";
import PropTypes from 'prop-types';
import TodoListItem from "./TodoListItem";

function TodoList({todoList, onRemoveTodo}) {
  return (
    <ul>
      {todoList.map((todo, index) => (
        <TodoListItem key={index} todo={todo} 
        onRemoveTodo = {onRemoveTodo} 
       
        />
      ))}
    </ul>
  );
}



TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, 
      title: PropTypes.string.isRequired, 
    })
  ).isRequired, 
  onRemoveTodo: PropTypes.func.isRequired,
};


export default TodoList;
