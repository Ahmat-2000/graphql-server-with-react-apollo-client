// resolvers are functions which tell graphql how resolve Query
// and mutation. For exemple if we have a Query named users: [User!]!
// then we need to write a function which gonna return a list
// of User.
// We have to write resolver(function) for each Query and mutation

const {UserList, MovieList} = require("../FakeData");
// lodash is a nodeJs module, it makes it easy to deal with array, like fine
// element in array with some specifics fields
const _ = require('lodash');
const resolvers = {
    // Query is the object containing all queries resolvers(GET request)
    // resolvers should be the same as the ones defined in type-defs.js
    // we can write our resolver in two ways, either write them like normal
    // functions or arrow funtions.
    Query: {
        // User Resolvers
        users: () => {
            return UserList;
        },
        // the parent object hold information about the parent resolver which call this resolver
        // the args object contain all Graphql arguments we passe to this resolver, in our cas args holds id
        // all 5 params are optionals
        user: (parent, args, contextValue, info) =>{
            const userId = args.id;
            const user = _.find(UserList, {id : Number(userId)});
            return user;
        },

        // Movie Resolvers
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList,{name})
            return movie;
        }
    },
    // Now we're gonna create a resolver to some User fields like the favoriteMovies field
    // We need these kind of resolvers to tell graphql how to make relation between different types
    // In our case, we're gonna link the User type to Movie Type
    // The favoriteMovies: [Movie] in User type must return a list of movies
    User: {
        favoriteMovies: () =>{
            // return all anime movies
            return _.filter(MovieList,(movie) => movie.isAnAnimation === true);
        }  
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.userInput;
            const lastId = UserList[UserList.length -1].id;
            user.id = lastId +1;
            UserList.push(user);
            return user;
        },
        updateUserName: (parent,args) => {
            const {userId, newName} = args;
            UserList.forEach((user) => {
                // we have to cast the id because all user inputs are strings
                if (user.id === Number(userId)) {
                    user.name = newName;
                }
            });
            return _.find(UserList, {id: Number(userId)});
        },
        deleteUser: (parent,args) => {
            const idToDelete = Number(args.id);
            _.remove(UserList, (user) => user.id === idToDelete);
            return true;
        }
    }
}

module.exports = {resolvers};