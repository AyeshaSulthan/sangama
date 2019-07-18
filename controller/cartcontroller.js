const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const cartSchema= require('../model/cartModel');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
const mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost/Shooping', { useNewUrlParser: true });

router.post('/createCart',(req,res,next) => {

    var newcart = new cartSchema(req.body);
   
    newcart.save(function(err,rows){
        console.log(req.body);
        if(err){
            res.status(500).json({
                err:err
            })
            return;
        }else{
            res.status(200).json({

                status:"success",
                data: rows
               
            })
            // console.log('hiii',req.body);
            res.send(req.body )
        }
    })

});

router.get('/product',(req,res,next) =>{

    cartSchema.find(function(err,rows){

        if(err){
            res.status(500).json({
                err:err
            })
            return;
        }else{
            res.status(200).json({

                status:"success",
                data: rows

            })
        }
// var products = productSchema.find();
// res.render('shop/index',{title:'Shopping Cart',products : products});
    })
});

module.exports = router;
