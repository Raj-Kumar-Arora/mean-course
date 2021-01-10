const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { APP_ID } = require('@angular/core');

app.use(function(req, res, next) {
  //set headers to allow cross origin request.
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.setHeader('Access-Control-Allow-Credentials', true);
      next();
  });

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.posts('api/posts', (req, res, next) => {
  const post = req.body;
  console.log ("Post data received in server : " + post);

  res.status(201).json( {
    message : 'Post fetched successfully!'
  });

});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    { title: "first server post", content:"first post from server"},
    { title: 'second server post', content:'2nd post from server'},
    { title: '3rd server post', content:'third post from server!!!'},

  ]

  res.status(200).json( {
    message : "Post fetched successfully!",
    posts: posts
  })
});

module.exports = app;
