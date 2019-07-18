var Product = require('../model/productModel');
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Shooping", { useNewUrlParser: true });

var products = [
    new Product({

        
       
       name:'Idli',
    PRICE:15
    }),
    new Product({
       
        name:'Khali Dosa',
     PRICE:20
     })
];
var done=0;
for(var i=0; i<products.length;i++){
    products[i].save(function(err,result)
    {
        done++;
        if(done=== products.length){
            exit();
        }
    });
   

}
function exit()
{
    mongoose.disconnect();
}