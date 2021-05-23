const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  photoUrl: String,
  thc: Number,
  cbd: Number,
  categoryId: String,
});

module.exports = mongoose.model('Product', productSchema);
