const router = require('express').Router();
let Items=require("../model/items")
let Users=require('../model/usermodel')
const mongoose=require('mongoose')
mongoose.set('useFindAndModify', false);
router.route("/").get((req,res)=>{
    Users.find().then(issue=>res.json(issue)).catch(err=>res.status(400).json('Error: ' + err));});
router.route('/add-user').post((req, res) => {
        const id=req.body.id;
        const name=req.body.name;
        const items=req.body.items;
        const User=new Users({id,name,items});
        User.save()
        .then(() => res.json('Issue added!'))
        .catch(err => res.status(400).json('Error: ' + err))
    });
router.route('/update-cart').post((req, res)=>{
        const name=req.body.name;
        const id=req.body.id;
        const price=req.body.price;
        const description=req.body.description;
        const quantity=req.body.quantity;
        const Item=new Items({name,id,price,description,quantity});
        const uid=req.body.uid;
        console.log(uid);
        //Users.findById(uid).then(user=>user.items.push(Item)).catch(err => res.status(400).json('Error: ' + err));
        Users.findOneAndUpdate(
            { name: uid }, 
            { $push: { items: Item  } },
           function (error, success) {
                 if (error) {
                     console.log(error);
                 } else {
                     console.log(success);
                 }
             });
            });
router.route('/get-cart').post((req,res)=>{
    console.log(req.body);
    Users.findOne({name:req.body.name}).then(user=>res.json(user.items)).catch(err=>console.log(err));
})
module.exports = router;
