
const { graphql, buildSchema } = require('graphql')
const express = require('express') 
const { graphqlHTTP } = require('express-graphql')//Middleware de graphql
const { append } = require('express/lib/response')

const app = express()
const port = process.env.port || 3000

// define the schema

const schema = buildSchema(`
    type Query{
        hello: String,
        goodbye: String
    }
`)

//config resolvers

const resolvers = {
    hello:() => {
        return 'hello world 🗺'
    },
    goodbye:() => {
        return 'see you latter 👋'
    }
}

//Run Query in express

app.use(
    "/api",
    graphqlHTTP({
        schema,
        graphiql: true,
        rootValue: resolvers,
    })
);

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})


//run Query in terminal
/* 
const source = "{ hello, goodbye }";

graphql({
    schema: schema,
    source,
    rootValue: resolvers
})
.then((data) => {
    console.log(data);
})  
.catch(e => {
    console.log(e);
});  */