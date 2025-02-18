import React, { useEffect, Fragment, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./Home";
// import New from './New'; 
import MyToDos from "./Mytodos";
import  './App.css';






function App() {
 
  return (
    
    <BrowserRouter>

    
      <div className="nav">
        <Link to="/">Home</Link>
        {/* <Link to="/new">New ToDos</Link> */}
        <Link to="/mytodos">My ToDos</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/new" element={<New />} /> */}
        <Route path="/mytodos" element={<MyToDos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
