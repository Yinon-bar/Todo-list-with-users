import appConfig from "../../../Config/appConfig";
import useFetch from "../../../Services/useFetch";
import UsersItem from "../UsersItem/UsersItem";
import "./UsersList.css";

function UsersList() {
  const [data, error, loading] = useFetch(appConfig.users);

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
    <div className="UsersList">
      {data.results.map((rndUser, index) => (
        <UsersItem key={index} rndUser={rndUser} />
      ))}
    </div>
  );
}

export default UsersList;
