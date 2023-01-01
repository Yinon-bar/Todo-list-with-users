import "./TaskItem.css";

function TaskItem({ tasks }) {
  return (
    <div className="TaskItem">
      {tasks.map((tObj) => (
        <h2>{tObj.title}</h2>
      ))}
    </div>
  );
}

export default TaskItem;
