import "./UsersItem.css";

function UsersItem({ rndUser }) {
  return (
    <div className="UsersItem">
      <h2>
        {rndUser.name.first} {rndUser.name.last}
      </h2>
    </div>
  );
}

export default UsersItem;
