import { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import ApiCall from "../utils/ApiCall";

const useFetch = (path, method, data, headers, dependenciesArray) => {
  const { setisLogged } = useContext(UserContext);
  const [error, setError] = useState(null);

  const request = { method: method, body: JSON.stringify(data) };

  useEffect(() => {
    fetch(`${ApiCall}${path}`, request, headers)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error(response.error);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setisLogged(true);
      })
      .catch((error) => setError(error));
  }, dependenciesArray);

  return { error };
};
export default useFetch;
