const mongoose=require('mongoose');
const Item=new mongoose.Schema({
   id:{ type: String, required: true},
   name:{type: String, required: true},
   price:{type:Number,required:true},
   description:{type: String},
   quantity:{type:Number,required:true},
},
{
    timestamps: true,
  });

  const Items = mongoose.model('Items', Item);
  module.exports=Items;

