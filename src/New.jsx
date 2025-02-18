import React, { useState } from 'react';
import MyToDos from './MyToDos'; // Import MyToDos component

const New = () => {
  const [todoName, setTodoName] = useState('');
  const [displayName, setDisplayName] = useState('Create new todo');

  const handleInputChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleAddTodo = () => {
    if (todoName.trim()) {
      setDisplayName(todoName);
      setTodoName(''); // Clear the input field after adding
    }
  };

  return (
    <div>
    
      <input
        type="text"
        value={todoName}
        onChange={handleInputChange}
        placeholder="Enter todo name"
      />
      <button onClick={handleAddTodo}>+</button>

      <h1>{displayName}</h1>
      <MyToDos /> {/* Render MyToDos component below the title */}
    </div>
  );
};

export default New;