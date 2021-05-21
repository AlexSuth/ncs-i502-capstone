const graphql = require('graphql');
const _ = require('lodash');

const Category = require('../models/category');
const Product = require('../models/product');

const {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
} = graphql;

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    photoUrl: { type: GraphQLString },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.find({ categoryId: parent.id });
      },
    },
  }),
});

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    photoUrl: { type: GraphQLString },
    thc: { type: GraphQLInt },
    cbd: { type: GraphQLInt },
    category: {
      type: CategoryType,
      resolve(parent, args) {
        return Category.findById(parent.categoryId);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    categories: {
      type: new GraphQLList(CategoryType),
      resolve(parent, args) {
        return Category.find({});
      },
    },
    category: {
      type: CategoryType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Category.findById(args.id);
      },
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.find({});
      },
    },
    product: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Product.findById(args.id);
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCategory: {
      type: CategoryType,
      args: {
        name: { type: GraphQLString },
        photoUrl: { type: GraphQLString },
      },
      resolve(parent, args) {
        let category = new Category({
          name: args.name,
          photoUrl: args.photoUrl,
        });
        return category.save();
      },
    },
    addProduct: {
      type: ProductType,
      args: {
        name: { type: GraphQLString },
        photoUrl: { type: GraphQLString },
        thc: { type: GraphQLInt },
        cbd: { type: GraphQLInt },
        categoryId: { type: GraphQLString },
      },
      resolve(parent, args) {
        let product = new Product({
          name: args.name,
          photoUrl: args.photoUrl,
          thc: args.thc,
          cbd: args.cbd,
          categoryId: args.categoryId,
        });
        return product.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
