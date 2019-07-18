

const express = require("express");
const bodyParser = require("body-parser");
const productSchema = require('../model/productModel');
const cartSchema = require('../model/cartModel');
const app = express();
const authController = require('../controller/authController');
const postController = require('../controller/postController')
const cartController = require('../controller/cartcontroller');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use('/post',postController);
app.use('/auth',authController);
app.use('/cart',cartController);
app.get('/',(req,res,next )=>{
  res.status(200).json("Hello");
})
app.get('/xyz',(req,res,next )=>{
  res.status(200).json("Helloxyz");
})
// app.post('/xyz',(req,res,next )=>{
//   var users=new userSchema(req.body)
//     users.save(function(err,result){
//         console.log('result');

//   res.status(200).json("Helloxyz");
// })
app.post('/s',(req,res,next) =>{
  var users=new productSchema(req.body)
  users.save(function(err,result){
      console.log(req.body);

      if(err){
          res.status(500).json(err);
          return;
      }else{
          res.status(200).json({
              status:"success",
              data:result
          })
      }
  })
});



module.exports = app;
