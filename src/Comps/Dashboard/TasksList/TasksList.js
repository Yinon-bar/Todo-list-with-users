import { useEffect, useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./TasksList.css";

function Tasks() {
  const [tasks, setTaska] = useState([]);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        setError(data.status);
        throw data.status;
      })
      .then((todos) => {
        setLoading(false);
        setTaska(todos);
      });
  }, []);

  if (error) {
    return (
      <>
        <h1>Canno't get the data from the server 😕</h1>
        <h2>Please try again later</h2>
      </>
    );
  }
  if (loading) {
    return (
      <>
        <h2>Loading... 💿💿💿</h2>
      </>
    );
  }

  return (
    <div className="TasksList">
      {tasks.map((tObj) => (
        <TaskItem key={tObj.id} task={tObj} />
      ))}
    </div>
  );
}

export default Tasks;
