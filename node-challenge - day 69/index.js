const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/populate_demo')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define schemas
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

// Define models
const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

// Routes
app.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.post('/posts', async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
});

app.get('/posts', async (req, res) => {
  const posts = await Post.find().populate('author');
  res.json(posts);
});

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
