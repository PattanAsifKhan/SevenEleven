const mongoose=require('mongoose');
const User=new mongoose.Schema({
    id:{ type: String, required: true},
    name:{type: String, required: true},
    items:{type:Array}
 },
 {
     timestamps: true,
});
const Users = mongoose.model('Users', User);
module.exports=Users;