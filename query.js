const { GraphQLObjectType,
  GraphQLString,GraphQLInt} = require('graphql');
  const _ = require('lodash');
  const {movieType,directorType} = require('./types.js');
  let {movies,directors} = require('./data.js');

//Define the Query
const queryType = new GraphQLObjectType({
 name: 'Query',
 fields: {
       hello: {//hello端点
           type: GraphQLString,//类型

           resolve: function () {//调用端点时执行
            console.log('hello used');
            return "Hello World";
          }
        },
        movie: {
         type: movieType,
         args: {
           id: { type: GraphQLInt }
         },
         resolve: function (source, args) {
           console.log('movie used');
           return _.find(movies, { id: args.id });
         }
       },
       director: {
         type: directorType,
         args: {
           id: { type: GraphQLInt }
         },
         resolve: function (source, args) {
           console.log('director used');
           return _.find(directors, { id: args.id });
         }
       }
     }
   });

exports.queryType = queryType;