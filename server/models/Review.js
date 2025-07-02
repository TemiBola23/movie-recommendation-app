const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  movieId: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, maxlength: 1000 }
}, { timestamps: true });
module.exports = mongoose.model('Review', reviewSchema);
