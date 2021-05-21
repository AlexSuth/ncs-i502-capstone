const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const mongoUrl = process.env.MONGO_URL;
const port = process.env.PORT;

mongoose.connect(`${mongoUrl}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use(
  '/graphql',
  graphqlHTTP({
    //options
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
