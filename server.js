const express = require("express");
//const { ListCollectionsCursor } = require('mongodb');
let http = require('http').createServer(app);
const app = express ();
c//onst port=8080;
app.listen(port, ()=>{
   console.log("listening to port " +port);
})
console.log("listening");

const UserRoute = require('./public/Routers/users')

app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 3030;
