const express = require("express");
var app = express();

// Routes
// "/" => "Hi there"
app.get("/", function(req,res){
    res.send("Hi there");
});
// "/bye" => "Bye"

app.get("/bye", function(req,res){
    res.send("Bye");
});
// "/dog" => "Meow"
app.get("/dog", function(req,res){
    res.send("Meow");
})


app.listen(3000, function(){
    console.log("server listening on port 3000");
});