
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

app.listen(3000, function(){
    console.log('------running------');
});