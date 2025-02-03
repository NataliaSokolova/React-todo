import React from 'react'
import styles from './TodoListItem.module.css'

function TodoListItem ({todo, onRemoveTodo}) {
  return (
       <li className =  {styles.ListItem}>
                <input  type="checkbox" defaultChecked={false} />
        {todo.title} 
        {todo.link && (
    <a 
      href={todo.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.TodoLink} // Добавьте стиль для ссылки, если нужно
    >
      (Link)
    </a>
  )}
        <button type="button" onClick = {() => onRemoveTodo(todo.id)} >Remove</button>
       </li>
 
  );
}

export default TodoListItem




  
