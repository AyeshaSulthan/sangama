const mongoose = require('mongoose');

const postSchema= mongoose.Schema({
    title: {type:String,require:true},
    description : {type:String,require:true},
    price: {type:Number,required:true}
    // userID: {type: String}
});
module.exports = mongoose.model("posts",postSchema);