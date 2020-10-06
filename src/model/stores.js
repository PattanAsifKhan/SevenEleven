const mongoose=require('mongoose');
const Store=mongoose.Schema({
    
        id:{ type: String, required: true},
        name:{type: String, required: true},
        lat:{type:Number,required:true},
        lon:{type:Number,required:true},
        items:{type:Array, required:true}
})
const Stores = mongoose.model('Stores', Store);
module.exports=Stores;