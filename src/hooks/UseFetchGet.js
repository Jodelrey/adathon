import { useState, useEffect } from "react";
import ApiCall from "../utils/ApiCall";

const useFetch = (path, dependenciesArray) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${ApiCall}${path}`)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error));
  }, dependenciesArray);

  return { data, error };
};

export default useFetch;
