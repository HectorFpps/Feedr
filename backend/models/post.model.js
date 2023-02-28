const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// picture, username, likes, dislikes, content, date

const postSchema = new Schema({
    picture: { type: String, required: true },
    username: { type: String, required: true },
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },
    content: { type: String, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;