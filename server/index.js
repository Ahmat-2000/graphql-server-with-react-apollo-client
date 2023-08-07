const {ApolloServer} = require("apollo-server");
const {typeDefs} = require("./schema/type-defs");
const {resolvers} = require('./schema/resolvers');
// instance for ApolloServer
const server = new ApolloServer({typeDefs, resolvers});


server.listen().then(({url}) => {
    console.log(`THE API IS RUNNING AT : ${url}`);
})