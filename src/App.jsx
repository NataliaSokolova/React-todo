import React, { useEffect, Fragment, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      const todos = data.records.map((todo) => ({
        id: todo.id,
        title: todo.fields.title,
      }));
      console.log("Todos Array:", todos);

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.log("Fetch error:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve({
            data: {
              todoList: JSON.parse(localStorage.getItem("todoList")) || [],
            },
          });
        } else {
          reject("Error fetching data.");
        }
      }, 3000);
    });

    myPromise.then((result) => {
      console.log("Promise resolved with data:", result.data.todoList);
      setTodoList(result.data.todoList);
      console.log("Todo list updated:", result.data.todoList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
      console.log("Todo list saved to localStorage:", todoList);
    }
  }, [todoList, isLoading]);

  function addTodo(newTodo) {
    setTodoList([newTodo, ...todoList]);
  }

  function removeTodo(id) {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>My Todo App</h1>

              <AddTodoForm addTodo={addTodo} todoList={todoList} />
              {isLoading ? (
                <p>Loading...</p>
              ) : todoList.length === 0 ? (
                <p>Your list is empty</p>
              ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              )}
            </>
          }
        />
        <Route
          path = "/new"
          element = {
            <>
            <h1>New Todo List</h1>
            
            </>
          }

      />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
