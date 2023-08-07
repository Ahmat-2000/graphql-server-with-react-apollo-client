/**
 * useQuery is hook that allows us to make a request to our Graphql API
 * when the component is mounted.
 * We can not control it or make queries on demand 
 */

/**
 * In the other hand, useLazyQuery allows us to make request on demand.
 *  With this hook we have the control over our api requests
 */

import React, { useState } from "react";
import { useQuery, useLazyQuery} from "@apollo/client";
import { QUERY_ALL_MOVIES, SEARCH_MOVIE_QUERY } from "../Queries/GraphqlQueuries";

const DisplayMovies = () => {
  const [searchDataState, setSearchDataState] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const { data: allMoviesData, loading: allMoviesLoading, error: allMoviesError} = useQuery(QUERY_ALL_MOVIES);
  const [searchMovie, { loading: searchMovieLoading, error: searchMovieError }] = useLazyQuery(SEARCH_MOVIE_QUERY,{
    onCompleted : (data) => {
      setSearchDataState(() => ({...data}))
    } 
  });
  const handleSearch = (e) => {
    e.preventDefault();
    searchMovie({ variables: { name: searchInput } });
  };
  const handleShowAllMovies = () => {
    setSearchInput(""); // Clear the search term
    setSearchDataState(() => []);
  };
  if (allMoviesLoading || searchMovieLoading) {
    return <h1>Data is loading...</h1>;
  }
  if (allMoviesError || searchMovieError) {
    console.log(allMoviesError || searchMovieError);
  }
  const movieToShow = searchDataState?.movie;
  return (
    <div>
      <h1>List of Movies :</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search movie by name"
          required
        />
        <button type="submit">Search</button>
        {/* Button to show all movies again */}
        {searchInput && <button type="button" onClick={handleShowAllMovies}>Show All Movies</button>}
      </form> 
      {   //(searchInput && !searchMovieData) ? (<p>NO MOVIE WAS FOUND!</p>)
        movieToShow ? (
        <div key={movieToShow.id}>
          <h1>Name: {movieToShow.name}</h1>
          <h1>Year of Publication: {movieToShow.yearOfPublication}</h1>
          <h1>Is an Animation: {String(movieToShow.isAnAnimation)}</h1>
          <hr />
        </div>
      ) : (
        allMoviesData?.movies.map((movie) => (
        <div key={movie.id}>
          <h1>Name: {movie.name}</h1>
          <h1>Year of Publication: {movie.yearOfPublication}</h1>
          <h1>Is an Animation: {String(movie.isAnAnimation)}</h1>
          <hr />
        </div>
        ))
      )}
    </div>
  );
};

export default DisplayMovies;
