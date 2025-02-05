import React, { useEffect, Fragment, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import styles from './Mytodos.module.css'

function MyToDos() {
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

    console.log("API Token:", import.meta.env.VITE_AIRTABLE_API_TOKEN);
    console.log("Base ID:", import.meta.env.VITE_AIRTABLE_BASE_ID);
    console.log("Table Name:", import.meta.env.VITE_TABLE_NAME);
    console.log("LocalStorage todoList:", localStorage.getItem("todoList"));

    try {
      if (
        !import.meta.env.VITE_AIRTABLE_API_TOKEN ||
        !import.meta.env.VITE_AIRTABLE_BASE_ID ||
        !import.meta.env.VITE_TABLE_NAME
      ) {
        console.error("Environment variables are not set properly.");
        return;
      }
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      console.log("Airtable API Response:", data);

      const todos = data.records.map((record) => ({
        id: record.id,
        title: record.fields.title,
      }));
      console.log("Todos Array:", todos);

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.error("Fetch error:", error.message); // Log the full error
      console.log("Falling back to localStorage.");

      setIsLoading(false);
      console.log("Fetch error:", error.message);
    }
  };

  useEffect(() => {
    const fetchDataWithLocalStorage = async () => {
      try {
        await fetchData();
      } catch (error) {
        console.log(
          "Fetching from Airtable failed. Falling back to localStorage."
        );
        const localTodos = JSON.parse(localStorage.getItem("todoList")) || [];
        setTodoList(localTodos);
        setIsLoading(false);
      }
    };

    fetchDataWithLocalStorage();
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



  // Remove Todo
  async function removeTodo(todoId) {
    // Airtable API details for deleting a todo
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}/${todoId}`;
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const updatedTodoList = todoList.filter((todo) => todo.id !== todoId);
      setTodoList(updatedTodoList); // Update the todo list after deletion
    } catch (error) {
      console.error("Error removing todo from Airtable:", error.message);
    }
  }

  // return (
  //   <>
  //     <AddTodoForm  className = {styles.AddTodoForm} addTodo={addTodo} todoList={todoList} />
  //     {isLoading ? (
  //       <p>Loading...</p>
  //     ) : todoList.length === 0 ? (
  //       <p>Your list is empty</p>
  //     ) : (
  //       <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
  //     )}
  //   </>
  // );


  return (
    <div className={styles.todoContainer}>
      <AddTodoForm 
        className={styles.addTodoForm} 
        addTodo={addTodo} 
        todoList={todoList} 
      />
      {isLoading ? (
        <p className={styles.loadingText}>Loading...</p>
      ) : todoList.length === 0 ? (
        <p className={styles.emptyListText}>Your list is empty</p>
      ) : (
        <TodoList classname = {styles.atodoList}
          todoList={todoList} 
          onRemoveTodo={removeTodo} 
        />
      )}
    </div>
  );

}

export default MyToDos;
