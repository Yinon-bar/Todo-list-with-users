import "./TaskCounter.css";

function TaskCounter() {
  const taskCounter = 3;

  return (
    <div className="TaskCounter">
      {taskCounter > 0 && <h3>Task Count: {taskCounter}</h3>}
      {taskCounter === 0 && <h3>Good Work! You have no pending tasks! 😎</h3>}
    </div>
  );
}

export default TaskCounter;
