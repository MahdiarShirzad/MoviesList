import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Main from "./components/Main";
import { useState } from "react";
import { useMovies } from "./hooks/useMovies";
import { useLocalDataBaseState } from "./hooks/useLocalDataBaseState";

export default function App() {
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);

  const [watched, setWatched] = useLocalDataBaseState([]);

  // function handleSelectMovie(id) {
  //   setSelectedId((selectedId) => (id === selectedId ? null : id));
  // }

  // function handleCloseMovie() {
  //   setSelectedId(null);
  // }

  // function handleAddWatched(movie) {
  //   setWatched((watched) => [...watched, movie]);
  // }

  // function handleDeleteWatched(id) {
  //   setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  // }

  // const router = createBrowserRouter([
  //   { path: "/", element: <HomePage /> },
  //   {
  //     path: "/app",
  //     element: <AppLayout />,
  //     children: [{ path: "/app/main", element: <Main /> }],
  //   },
  //   { path: "/app/main/movielist", element: <MovieList /> },
  //   { path: "*", element: <NotFound /> },
  // ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="/app"
          element={
            <AppLayout query={query} setQuery={setQuery} movies={movies} />
          }
        >
          <Route
            path="/app/"
            element={
              <Main
                isLoading={isLoading}
                error={error}
                movies={movies}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                watched={watched}
                setWatched={setWatched}
                average={average}
              />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
