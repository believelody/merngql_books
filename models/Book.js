const mongoose = require('mongoose');
const { Schema } = require('mongoose');

module.exports = mongoose.model('Book', new Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  authorId: { type: Schema.Types.ObjectId, ref: 'Author '}
}));
