const sharedListSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  sharedWith: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  movies: [
    {
      movieId: String,
      title: String,
      poster_path: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('SharedList', sharedListSchema);
