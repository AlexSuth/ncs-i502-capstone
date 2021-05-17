const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
} = graphql;

// dummy data
var categories = [
  { name: 'Flower', photoUrl: 'www.fakeurl.fake', id: '1' },
  { name: 'Extracts', photoUrl: 'www.fakeurl.fake', id: '2' },
  { name: 'Vaporizers', photoUrl: 'www.fakeurl.fake', id: '3' },
];

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    photoUrl: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    category: {
      type: CategoryType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to get data from db
        console.log(typeof args.id);
        return _.find(categories, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
