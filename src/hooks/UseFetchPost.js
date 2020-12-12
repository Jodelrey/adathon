import { useState, useEffect } from "react";
import ApiCall from "../utils/ApiCall";

const useFetchPost = (path, method, data, dependenciesArray) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const request = { method: method, body: JSON.stringify(data) };

  useEffect(() => {
    fetch(`${ApiCall}${path}`, request)
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

export default useFetchPost;
