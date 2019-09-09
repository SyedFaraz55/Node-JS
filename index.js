const express = require('express');
const path =require('path');
const routes = require("./routes");
const bodyParser = require('body-parser');
const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public","css")));


const PORT = process.env.PORT || 3000;

app.get("/",routes.index);
app.get("/create",routes.create);
app.post("/create",routes.createPost);

app.listen(PORT,()=>console.log('listening port 3000'));
