const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  movieId: {
    type: Number,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  },
  comment: {
    type: String,
    maxlength: 1000
  }
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
