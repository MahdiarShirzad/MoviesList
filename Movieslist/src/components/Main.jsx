/* eslint-disable react/prop-types */
import MovieList from "./MovieList";
import ErrorMessage from "./ErrorMessage";
import MovieDetails from "./MovieDeatils";
import Loader from "./Loader";
import WatchedSummary from "./WatchedSummary";
import WatchedMoviesList from "./WatchedMovieList";
import Box from "./Box";

// eslint-disable-next-line react/prop-types
export default function Main({
  isLoading,
  error,
  movies,
  selectedId,
  setSelectedId,
  watched,
  setWatched,
  average,
}) {
  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <main className="main">
      <Box>
        {isLoading && <Loader />}
        {!isLoading && !error && (
          <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
        )}
        {error && <ErrorMessage message={error} />}
      </Box>
      <Box>
        {selectedId ? (
          <MovieDetails
            selectedId={selectedId}
            onCloseMovie={handleCloseMovie}
            onAddWatched={handleAddWatched}
            watched={watched}
          />
        ) : (
          <>
            <WatchedSummary watched={watched} average={average} />
            <WatchedMoviesList
              watched={watched}
              onDeleteWatched={handleDeleteWatched}
            />
          </>
        )}
      </Box>
    </main>
  );
}
