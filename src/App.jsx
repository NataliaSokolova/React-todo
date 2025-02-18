import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import MyToDos from "./components/Mytodos";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/mytodos">My ToDos</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mytodos" element={<MyToDos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
