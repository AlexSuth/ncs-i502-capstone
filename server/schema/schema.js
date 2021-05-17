const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
} = graphql;

// dummy data
var categories = [
  { name: 'Flower', photoUrl: 'www.fakeurl.fake', id: '1' },
  { name: 'Extracts', photoUrl: 'www.fakeurl.fake', id: '2' },
  { name: 'Edibles', photoUrl: 'www.fakeurl.fake', id: '3' },
];

var products = [
  {
    name: 'Northern Lights 3.5g',
    photoUrl: 'www.fakeurl.fake',
    id: '1',
    thc: '19.4%',
    cbd: '0.2%',
    categoryId: '1',
  },
  {
    name: 'Yummy Chews 1:1',
    photoUrl: 'www.fakeurl.fake',
    id: '2',
    thc: '100mg',
    cbd: '100mg',
    categoryId: '3',
  },
  {
    name: 'White Widow Sauce 1g',
    photoUrl: 'www.fakeurl.fake',
    id: '3',
    thc: '78.4%',
    cbd: '2.2%',
    categoryId: '2',
  },
];

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    photoUrl: { type: GraphQLString },
  }),
});

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    photoUrl: { type: GraphQLString },
    thc: { type: GraphQLString },
    cbd: { type: GraphQLString },
    category: {
      type: new GraphQLList(CategoryType),
      resolve(parent, args) {
        console.log(parent);
        return _.filter(categories, { id: parent.categoryId });
      },
    },
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
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return products;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
