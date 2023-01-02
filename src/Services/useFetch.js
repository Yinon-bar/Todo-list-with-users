import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        setError(data.status);
        throw data.status;
      })
      .then((todos) => {
        setLoading(false);
        setData(todos);
      });
  }, []);

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
}

export default useFetch;
