const mongoose = require('mongoose');
const { Schema } = require('mongoose');

module.exports = mongoose.model('Author', new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  authorId: { type: Schema.Types.ObjectId, ref: 'Book '}
}));
