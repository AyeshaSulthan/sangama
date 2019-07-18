const mongoose = require('mongoose');
const cartSchema= mongoose.Schema({
    name: {type:String,require:true},
    imagepath: {type:String,require:true},
    description: {type:String,require:true},
    price: {type:Number,required:true}
    
});
module.exports = mongoose.model("Cart",cartSchema);