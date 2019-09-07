const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/blog",{useNewUrlParser:true});

const Schema = new mongoose.Schema({
  title:String,
  body:String,
  author:String,
  date:Date
});

const Post = mongoose.model('blog',Schema);

const post1 = new Post({
  title:"Express JS framework update",
  body:"A new framework for express has been introduced by large developer community",
  author:'David',
  date:10/05/2019
});

Post.find({},function(err,data){
  if(err) throw err;
  console.log(data);
})
