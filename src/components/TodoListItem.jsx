import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoListItem.module.css'


function TodoListItem ({todo, onRemoveTodo}) {
  return (
       <li className =  {styles.ListItem}>
                <input  type="checkbox" defaultChecked={false} />
        {todo.title} 
 

        <button type="button" onClick = {() => onRemoveTodo(todo.id)} >Remove</button>
       </li>
 
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
  }).isRequired,
  onRemoveTodo: PropTypes.func.isRequired, 
};

export default TodoListItem




  
