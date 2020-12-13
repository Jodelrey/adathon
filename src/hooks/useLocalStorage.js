const useLocalStorage = () => {
  const localStorage = window.localStorage;

  const getData = () => {
    const data = localStorage.getItem("data");

    if (data) {
      return true;
    }
  };
  const removeFromLocalStorage = () => {
    localStorage.removeItem("data");
    console.log("entro a remove");
    return false;
  };

  const saveToLocalStorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
  };

  // const checkTimeStorage = (date) => {
  //   if (new Date(date) <= new Date()) {
  //     localStorage.removeItem("data");
  //     return true;
  //   }
  // };

  return {
    getData,
    saveToLocalStorage,
    removeFromLocalStorage,
  };
};

export default useLocalStorage;
