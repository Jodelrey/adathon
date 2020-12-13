import { useState, useEffect, useContext } from "react";
import ApiCall from "../utils/ApiCall";
import UserContext from "../context/UserContext";

const useFetchPost = (path, method, data, headers, dependenciesArray) => {
  const { user } = useContext(UserContext);
  const { setisLogged } = useContext(UserContext);
  const [error, setError] = useState(null);

  const request = { method: method, body: JSON.stringify(data) };

  useEffect(() => {
    fetch(`${ApiCall}${path}`, request, headers).then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        return response.json();
      }
    });
  });
};
export default useFetchPost;
