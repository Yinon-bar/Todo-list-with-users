import appConfig from "../../../Config/appConfig";
import useFetch from "../../../Services/useFetch";
import TaskItem from "../TaskItem/TaskItem";
import "./TasksList.css";

function Tasks() {
  const [data, error, loading] = useFetch(appConfig.todos);

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
      {data.map((tObj) => (
        <TaskItem key={tObj.id} task={tObj} />
      ))}
    </div>
  );
}

export default Tasks;
