const useLocalStorage = () => {
    const localStorage = window.localStorage;
  
    const getData = () => {
        const data = localStorage.getItem("data");

        if(data) {
            return true
        }
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
    };
  };
  
  export default useLocalStorage;