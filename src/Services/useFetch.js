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

  return [data, error, loading];
}

export default useFetch;
