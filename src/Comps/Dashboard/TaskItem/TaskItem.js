import "./TaskItem.css";

function TaskItem({ task }) {
  return (
    <div className="TaskItem">
      <h4>task ID: {task.id}</h4>
      <h3>{task.title}</h3>
    </div>
  );
}

export default TaskItem;
