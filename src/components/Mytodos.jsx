import React, { useEffect, Fragment, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import styles from "./Mytodos.module.css";

function MyToDos() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAscending, setIsAscending] = useState(true);
  const [sortField, setSortField] = useState("title");

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}?view=Grid%20view`;

    //&sort[0][field]=title&sort[0][direction]=asc

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

      console.log("Sorted Airtable response:", data.records);

      const todos = data.records.map((record) => ({
        id: record.id,
        title: record.fields.title,
        createdTime: record.fields.createdTime,
      }));
      console.log("Todos Array:", todos);

      setTodoList(sortTodos(todos, sortField, isAscending)); // Sort on load
      setIsLoading(false);
    } catch (error) {
      console.error("Fetch error:", error.message); // Log the full error
      console.log("Falling back to localStorage.");

      setIsLoading(false);
      console.log("Fetch error:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [sortField, isAscending]);

  const sortTodos = (todos, field, ascending) => {
    return [...todos].sort((a, b) => {
      let valueA = a[field];
      let valueB = b[field];

      if (typeof valueA === "string") valueA = valueA.toLowerCase();
      if (typeof valueB === "string") valueB = valueB.toLowerCase();

      if (valueA < valueB) return ascending ? -1 : 1;
      if (valueA > valueB) return ascending ? 1 : -1;
      return 0;
    });
  };

  // Toggle sorting order
  const toggleSortOrder = () => {
    setIsAscending((prev) => !prev);
  };

  // Automatically re-sort when sort field or order changes
  useEffect(() => {
    setTodoList((prevTodos) => sortTodos(prevTodos, sortField, isAscending));
  }, [sortField, isAscending]);

  // Add new todo and sort immediately
  function addTodo(newTodo) {
    setTodoList((prevTodos) =>
      sortTodos([...prevTodos, newTodo], sortField, isAscending)
    );
  }

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

  return (
    <div className={styles.todoContainer}>
      <AddTodoForm
        className={styles.addTodoForm}
        addTodo={addTodo}
        todoList={todoList}
      />

      <div>
        <button onClick={toggleSortOrder}>
          {isAscending ? "Sort Descending" : "Sort Ascending"}
        </button>
      </div>
      {isLoading ? (
        <p className={styles.loadingText}>Loading...</p>
      ) : todoList.length === 0 ? (
        <p className={styles.emptyListText}>Your list is empty</p>
      ) : (
        <TodoList
          classname={styles.atodoList}
          todoList={todoList}
          onRemoveTodo={removeTodo}
        />
      )}
    </div>
  );
}

export default MyToDos;
