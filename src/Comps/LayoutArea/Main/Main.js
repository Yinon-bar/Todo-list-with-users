import React from "react";
import TaskCounter from "../../Dashboard/TaskCounter/TaskCounter";
import Tasks from "../../Dashboard/TasksList/TasksList";
import Welcome from "../../Dashboard/Welcome/Welcome";
import "./Main.css";

function Main() {
  return (
    <main className="Main">
      <Welcome />
      <TaskCounter />
      <Tasks />
    </main>
  );
}

export default Main;
