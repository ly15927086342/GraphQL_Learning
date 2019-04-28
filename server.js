//graphql创建端点
//get all the libraries needed
const express = require('express');
const graphqlHTTP = require('express-graphql');
const {GraphQLSchema} = require('graphql');

const {queryType} = require('./query.js');

//setting up the port number and express app
const port = 5000;
const app = express();

// Define the Schema
const schema = new GraphQLSchema({ query: queryType });

//Setup the nodejs GraphQL server
app.use('/graphql', graphqlHTTP({
   schema: schema,//指定端点，输入和输出字段，执行的操作
   graphiql: true,//web UI
}));

app.listen(port);
console.log(`GraphQL Server Running at localhost:${port}`);

// express创建端点
// const express = require('express');
// const port = 5000;
// const app = express();

// app.get('/hello', (req,res) => {
//    res.send("hello");
//   }
// );

// app.listen(port);
// console.log(`Server Running at localhost:${port}`);