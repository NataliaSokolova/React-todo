import React, { useState, useRef, useEffect } from "react";
import InputWithLabel from "./InputWithLabel";
import PropTypes from 'prop-types';



export default function AddTodoForm({ addTodo, todoList }) {
  const [todoTitle, setTodoTitle] = useState("");
  const inputRef = useRef(null);

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  useEffect(() => {
    inputRef.current.focus();
  }, [todoTitle, todoList]);





  async function handleAddTodo(event) {
    event.preventDefault();

    // Airtable API details
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          title: todoTitle,
        },
      }),
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      const newTodo = {
        title: data.fields.title,
        id: data.id,
      };

      // Add the new todo to the list
      addTodo(newTodo);

      // Clear the input field
      setTodoTitle("");
    } catch (error) {
      console.error("Error adding todo to Airtable:", error.message);
    }

    
  }






  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        id="todoTitle"
        type="text"
        value={todoTitle}
         placeholder="Enter todo title"
        name="title"
        onChange={handleTitleChange}
        inputRef={inputRef}
      />
      <button type="submit">+</button>
    </form>
  );
}

AddTodoForm.propTypes = {
  todoTitle: PropTypes.string.isRequired, 
  handleTitleChange: PropTypes.func.isRequired, 
  handleAddTodo: PropTypes.func.isRequired, 
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]), 
};