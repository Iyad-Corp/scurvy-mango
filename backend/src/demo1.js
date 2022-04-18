var express = require("express");
var app = express();
var port = 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// const uri = "mongodb+srv://scurvy-mango:mango.scurvy@scurvy-mango.qpzfz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
// mongoose.connect(uri);
mongoose.connect("mongodb://localhost:27017/node-demo");

// var nameSchema = new mongoose.Schema({
//   username: String,
//   numapps: Number,
//   appdata: String,
//   compname: String,
//   connections: String,
//   numrecruiters: Number,
//   recdata: String
// })

var nameSchema = new mongoose.Schema({
  firstname: String,
  lastname: String
});

var User = mongoose.model("User",nameSchema);

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/addname", (req,res) => {
  var myData = new User(req.body);
  myData.save()
  .then(item => {
    res.send("item saved to database");
  })
  .catch(err =>{
    res.status(400).send("unable to save to database");
  });

});

app.listen(port, () => {
  console.log("Server listenng on port " + port);
});