const cookies = require('cookie-session');
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.', '.env') });
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const authorizationRouter = require('./routes/authorization');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const categoriesRouter = require('./routes/categories');
const tagsRouter = require('./routes/tags');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://127.0.0.1/midterm', {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.error('connected to database'));

app.use(
    cookies({
        name: 'user',
        keys: [ 'key1', 'key2'],
    })
);

app.set('view engine', 'ejs');

app.use('/authorization', authorizationRouter);
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/categories', categoriesRouter);
app.use('/tags', tagsRouter);

// app.listen(3000, () => console.log('server running'));

app.listen(port, () => {
    console.log('Server is running');
  });