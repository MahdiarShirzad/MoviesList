/* eslint-disable react/prop-types */

import NavBar from "../components/Navbar";
import Search from "../components/Search";
import NumResults from "../components/NumResults";
import { Outlet } from "react-router-dom";

export default function AppLayout({ query, movies, setQuery }) {
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

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Outlet />
    </>
  );
}
