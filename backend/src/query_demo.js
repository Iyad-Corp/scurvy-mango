var MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://scurvy-mango:mango.scurvy@scurvy-mango.qpzfz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Test");
  
    var query = { Name : "Steve Rogers" };
    dbo.collection("User").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
}); 

MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Test");
  
    var query = { Name : "Google" };
    dbo.collection("Companies").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
}); 

