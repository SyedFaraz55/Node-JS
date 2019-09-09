const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/blog",{useNewUrlParser:true});

const Schema = new mongoose.Schema({
  title:String,
  body:String,
  author:String,
  date:Date
});

const Post = mongoose.model('blog',Schema);

// const data = new Post({
//   title:"React JS ",
//   body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   author:"david",
//   date:"1905022019"
// });
//
// data.save();

module.exports = Post;
