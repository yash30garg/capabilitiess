// const http =require('http');
// const fs =require('fs');
// const hostname='127.0.0.1';
// const port =3001;
// fs.readFile('index.html',(err, html) =>
// {
//     if(err)
//     {
//         throw err;
//     }


// const server =http.createServer((req,res) => 
// {
// res.statusCode=200;
// res.setHeader('Content-type','text/html');
// res.write(html);
// res.end();


// });

// server.listen(port,hostname, () => {
//   console.log('server started on port'+port);
// });
// });



const express= require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
// const routes=require('./routes/api');

const app=express(); //set up express app

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise=global.Promise;
app.use(express.static('public'));

app.use(bodyParser.json());

app.use('/api',require('./routes/api'));   //same as app.use('/api',routes);

//error handling middleware
app.use(function(err,req,res,next)
{
// console.log(err);
res.status(422).send({error:err.message});
});

//listen for requests
  app.listen(process.env.port || 4000,function()  
 {
console.log('now listening for request');
 });
