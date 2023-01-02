import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Page404 from "../../Pages/Page404/Page404";
import Posts from "../../Pages/Posts/Posts";
import TodoList from "../../Pages/TodoList/TodoList";
import Users from "../../Pages/Users/Users";

function Routing() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="/users" element={<Users />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default Routing;
