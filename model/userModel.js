const mongoose = require('mongoose');
const userSchema= mongoose.Schema({
    name: {type:String,require:true},
    loginID : {type:String,require:true},
    password: {type:String,required:true},
    usertype: {type: String,require:true},
    // createOn :{type:Date, default: new Date()}
});
module.exports = mongoose.model("users",userSchema);