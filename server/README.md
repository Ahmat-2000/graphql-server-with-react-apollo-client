# graphql-server-with-apollo-server

# Some Queries and Mutations to use in Apollo play ground

# Queries

query getAllMovies{
  movies {
    name
    yearOfPublication
    isAnAnimation
  }
}

query getMovieByName($name: String!){
  movie(name: $name) {
    name
    yearOfPublication
    isAnAnimation
  }
}

query getUserById($id: ID!){
  user(id: $id) {
    name
    age
    nationality
    favoriteMovies{
      name
      yearOfPubication
      isAnAnimation
    }
  }
}

query getAllUsers{
  users {
    id
    name
    username
    age
  }
}

# mutations

mutation createUser($input: createUserInput!){
  createUser(userInput: $input) {
    id
    name
    age
    nationality
  }
}

mutation updateUserNameById($id: ID!, $newName: String!){
  updateUserName(userId: $id, newName: $newName) {
    name
    age
    nationality
  }
}

mutation deleteUserById($id: ID!){
  deleteUser(id: $id)
}