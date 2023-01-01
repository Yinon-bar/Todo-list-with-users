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
    <div className="Tasks">
      <TaskItem tasks={tasks} />
    </div>
  );
}

export default Tasks;
