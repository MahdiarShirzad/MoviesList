import axios from "axios";
import { useState, useEffect } from "react";

export function useLocalDataBaseState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
    // async function getMovies() {
    //   const storedValue = await axios.get(
    //     "https://64feed59f8b9eeca9e294c90.mockapi.io/movies"
    //   );
    //   return storedValue ? JSON.parse(storedValue) : initialState;
    // }
    // getMovies();
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
      // axios.post("https://64feed59f8b9eeca9e294c90.mockapi.io/movies");
    },
    [value, key]
  );

  return [value, setValue];
}
