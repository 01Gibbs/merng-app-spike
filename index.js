const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const User = require("./models/User");
const { MONGODB } = require("./config.js");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    email: String!
  }

  type Query {
    getUsers: [User]
  }
`;

const resolvers = {
  Query: {
    async getUsers() {
      try {
        const users = await User.find();
        return users;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen({ port: 5000 });
  })
  .then((response) => {
    console.log(`Server running at ${response.url}`);
  });
