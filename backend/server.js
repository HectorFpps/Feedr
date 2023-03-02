const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 27017;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

connection.on('error', err => {
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
    process.exit();
});

const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
