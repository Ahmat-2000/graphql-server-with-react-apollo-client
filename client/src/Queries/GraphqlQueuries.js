import {gql} from "@apollo/client";

// get all users
export const QUERY_ALL_USERS = gql`
    query getAllUsers{
        users {
            id
            name
            username
            age
            nationality
        }
    }
`;
// get All movies
export const QUERY_ALL_MOVIES = gql`
    query getAllMovies{
        movies {
          id
          name
          yearOfPublication
          isAnAnimation
        }
    }
`;
// Define the SEARCH_MOVIES_QUERY
export const SEARCH_MOVIE_QUERY = gql`
  query searchMovie($name: String!) {
    movie(name: $name) {
      id
      name
      yearOfPublication
      isAnAnimation
    }
  }
`;