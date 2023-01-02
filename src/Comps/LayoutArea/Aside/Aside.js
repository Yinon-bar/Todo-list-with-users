import { NavLink } from "react-router-dom";
import "./Aside.css";

function Aside() {
  return (
    <aside className="Aside">
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/todo">Todo List</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
    </aside>
  );
}

export default Aside;
