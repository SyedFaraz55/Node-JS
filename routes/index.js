const path = require('path');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/blog",{useNewUrlParser:true});

const Schema = new mongoose.Schema({
  title:String,
  body:String,
  author:String,
  date:Date
});

const Post = mongoose.model('blog',Schema);


exports.index = function(req,res){
  // res.sendFile(path.join(path.resolve(),"public","index.html"))
  Post.find({},function(err,data){
    if(err) throw err;
    res.render('index',{dataMongo:data});
  })
};

exports.create = function(req,res){
  res.sendFile(path.join(path.resolve(),"public","index.html"))
}
