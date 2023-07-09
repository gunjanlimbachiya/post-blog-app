import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedPosts from "./components/Posts";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="posts/*" element={<ProtectedPosts />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
