const router = require('express').Router();
let Items=require("../model/items")

router.route("/").get((req,res)=>{
    Items.find().then(issue=>res.json(issue)).catch(err=>res.status(400).json('Error: ' + err));});
router.route('/add-item').post((req, res) => {
        const id=req.body.id;
        const name=req.body.name;
        const price=req.body.price;
        const quantity=req.body.quantity;
        const descripton=req.body.description;
        const Item=new Items({id,name,price,quantity,descripton});
        Item.save()
        .then(() => res.json('Issue added!'))
        .catch(err => res.status(400).json('Error: ' + err))
    });
module.exports = router;