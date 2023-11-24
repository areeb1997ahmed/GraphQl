const express = require("express");
const { ApolloServer } = require("@apollo/server");
const cors = require("cors");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const axios = require("axios");

async function startServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs: `
        type User{
            id:ID!
           name:String!
         }
            type Todos{
                userId:ID
                id:ID!
                title:String!
                completed:Boolean
               user:User!
             }

        type Query {
            getProducts:[Todos]
            User:[User]
            getUser(id:ID!):User
        } `,
    resolvers: {
      //this is for like join the table and getting the user according to the todos
      //we do this because we dont want to execute the api multiple time

      // the attribute todos should be same as define is the schema on line 18
      // the inner attribute `user` should be same as the key define in Todos key user

      Todos: {
        user: async (todos) =>
          (
            await axios.get(
              `https://jsonplaceholder.typicode.com/users/${todos.userId}`
            )
          ).data,
      },
      Query: {
        getProducts: async () =>
          (await axios.get("https://jsonplaceholder.typicode.com/todos")).data,

        User: async () =>
          (await axios.get("https://jsonplaceholder.typicode.com/users")).data,

        // this is for finding a specific user According to the parameter id

        getUser: async (parent, { id }) =>
          (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`))
            .data,
      },
    },
  });

  app.use(bodyParser.json());
  app.use(cors());

  await server.start();

  app.use("/graphql", expressMiddleware(server));
  app.listen(8000, () => console.log("server started"));
}
startServer();
