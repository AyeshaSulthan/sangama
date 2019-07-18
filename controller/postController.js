const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const productSchema= require('../model/productModel');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/Shooping', { useNewUrlParser: true });

router.post('/createPost',(req,res,next) => {

    var newPost = new productSchema(req.body);
   
    newPost.save(function(err,rows){
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
            res.send(req.body )
        }
    })

});

router.get('/find',(req,res,next) =>{

    productSchema.find(function(err,rows){

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
