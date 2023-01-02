import TaskCounter from "../../Dashboard/TaskCounter/TaskCounter";
import Welcome from "../../Dashboard/Welcome/Welcome";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Welcome />
      <TaskCounter />
    </div>
  );
}

export default Home;
