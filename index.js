const express = require('express');
const path =require('path');
const routes = require("./routes");
const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,"public","css")));


const PORT = process.env.PORT || 3000;

app.get("/",routes.index);
app.get("/create",routes.create);

app.listen(PORT,()=>console.log('listening port 3000'));
