const path = require('path');
const express =  require('express');
const bodyParser = require('body-parser');
const Post  = require('../db/db.config');
const app = express();

const err = [];

exports.index = function(req,res){
  // res.sendFile(path.join(path.resolve(),"public","index.html"))
  Post.find({},function(err,data){
    if(err) throw err;
    res.render('index',{data,err});
  })
};

exports.create = function(req,res){
  res.render('create');
}

exports.createPost = function(req,res){

  const postData = {
    title:req.body.title,
    body:req.body.description,
    author:req.body.author,
    date:req.body.date,
  };

  const { title,body,author,date } = postData;

    const post = new Post({
      title:title,
      body:body,
      author:author,
      date:date
    });

    post.save();
    res.redirect("/");
  }
