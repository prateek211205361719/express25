
var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var {todo} = require('./models/Todo');
var user = require('./models/user');


var app  = express();
app.use(bodyParser.json());
app.post('/todos', function(req, res){
     var todo1 = new todo({
         text:req.body.text,
     });
     todo1.save().then((rec) => {
         res.send(rec);
     } , (err) => {
        res.status(400).send(err.message);
     });
});
app.get('/todos', function(req, res){
 
    todo.find().then((data) => {
        res.send({
            data,
            staus:200,
        });
    } , (err) => {
        res.status(400).send(err);
    });
});

app.listen(3000, function(){
    console.log('------running------');
});