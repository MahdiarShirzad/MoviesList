import axios from "axios";
import { useState, useEffect } from "react";

const KEY = "5d2c2427";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await axios.get(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );
          console.log(res.data.Search);

          if (res.data.Response === "False") throw new Error("Movie not found");

          setMovies(res.data.Search);
          setError("");
        } catch (err) {
          console.log(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();
    },
    [query]
  );

  return { movies, isLoading, error };
}
