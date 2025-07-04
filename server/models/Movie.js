import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
  tmdbId: { type: Number, required: true, unique: true }
}, { timestamps: true });

export default mongoose.model('Movie', MovieSchema);