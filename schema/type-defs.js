// this file will contain all of our types, we define them here
// And then we will pass an object contains all the type to the ApolloServer
// instance within index.js at the root folder

// gql allows us to write pure graphql code
const {gql} = require("apollo-server");

// The type Query is highest level and it's the one we'll use in our frot-end to
// request our graphql server
const typeDefs = gql`
    
    enum Nationality{
        CANADA
        BRAZIL
        TCHAD
        FRANCE
        SPAIN
    }

    type User{
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User!]
        favoriteMovies: [Movie]
    }

    type Movie{
        id: ID!
        name: String!
        yearOfPubication: Int!
        isAnAnimation: Boolean!
    }

    type Query{
        users : [User!]!
        user(id: ID!): User
        movies: [Movie!]!
        movie(name: String!): Movie!
    }
`;
// enums allow us to validate data for some fields

module.exports = {typeDefs};