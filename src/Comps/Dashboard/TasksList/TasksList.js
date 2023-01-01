import { useEffect, useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./TasksList.css";

function Tasks() {
  const [tasks, setTaska] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => data.json())
      .then((todos) => setTaska(todos));
  }, []);

  return (
    <div className="TasksList">
      {tasks.map((tObj) => (
        <TaskItem key={tObj.id} task={tObj} />
      ))}
    </div>
  );
}

export default Tasks;
