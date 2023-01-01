import "./TaskItem.css";

function TaskItem({ tasks }) {
  return (
    <div className="TaskItem">
      {tasks.map((tObj) => (
        <h1>{tObj.title}</h1>
      ))}
    </div>
  );
}

export default TaskItem;
