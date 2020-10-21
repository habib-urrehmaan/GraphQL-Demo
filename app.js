const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();

mongoose.connect("mongodb+srv://habib_urehman:P7u82VBBUPWxrVh@cluster0.r504f.mongodb.net/gql-demo?retryWrites=true&w=majority");
mongoose.connection.once('open', ()=>{
    console.log('connected ...');
})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000, () => {
    console.log("listening on port 4000");
});

