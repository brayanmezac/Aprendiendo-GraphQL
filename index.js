'use strict'

const {graphql, buildSchema} = require ('graphql')

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

//run Query hello

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
}); 