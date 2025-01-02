import React, { useEffect, Fragment, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";


function App() {
  const [todoList, setTodoList] = React.useState([]) 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {

    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
      const success = true;               
      if (success) {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem("todoList")) || [],
          }
        });
      } else {
        reject("Error fetching data.");
      }
    }, 3000);
    });

    myPromise
      .then((result) => {
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

  function removeTodo(id){
   const updatedTodoList =  todoList.filter((todo)=>  todo.id  !== id);
   setTodoList(updatedTodoList);
  }

  return (
    <>
      <h1>My Todo App</h1>
      
      <AddTodoForm addTodo={addTodo} todoList={todoList}/>
      {isLoading ? (
        <p>Loading...</p>
      ) : todoList.length === 0 ? (
        <p>Your list is empty</p> // Сообщение, если список пуст
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </>
  );
}

export default App;
