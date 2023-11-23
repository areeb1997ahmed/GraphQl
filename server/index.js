const express = require('express')
const {ApolloServer} =require('@apollo/server')
const cors = require('cors')
const {expressMiddleware}=require('@apollo/server/express4')
const bodyParser = require('body-parser')
const axios = require('axios')



async function startServer (){
    const app=express();
    const server=new ApolloServer({
        typeDefs:`
            type Product{
                id:ID!
                title:String!
                description:String!  
        }
        type Query {
            getProducts:[Product]
        } `,
        resolvers:{
            Query:{
                getProducts:async ()=>(await axios.get("https://fakestoreapi.com/products")).data
            }
        }
    });

    app.use(bodyParser.json());
    app.use(cors());

    await server.start();

    app.use("/graphql", expressMiddleware(server));
    app.listen(8000,()=> console.log('server started'));
}
startServer();