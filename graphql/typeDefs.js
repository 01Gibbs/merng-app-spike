const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    email: String!
  }
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }

  type Query {
    getUsers: [User]
    getPosts: [Post]
  }
  type Mutation{
    
  }
`;

module.exports = typeDefs;
