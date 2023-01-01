import { useEffect, useState } from "react";
import UsersItem from "../UsersItem/UsersItem";
import "./UsersList.css";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((data) => data.json())
      .then((rndUsers) => setUsers(rndUsers.results));
  }, []);

  return (
    <div className="UsersList">
      {users.map((rndUser, index) => (
        <UsersItem key={index} rndUser={rndUser} />
      ))}
    </div>
  );
}

export default UsersList;
