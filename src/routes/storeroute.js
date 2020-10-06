const router = require('express').Router();
let Stores=require("../model/stores")
router.route("/").get((req,res)=>{
    Stores.find().then(issue=>res.json(issue)).catch(err=>res.status(400).json('Error: ' + err));});
router.route('/add-store').post((req, res) => {
        const id=req.body.id;
        const name=req.body.name;
        const lat=req.body.lat;
        const lon=req.body.lon;
        const items=req.body.items;
        const Store=new Stores({id,name,lat,lon,items});
        Store.save()
        .then(() => res.json('Issue added!'))
        .catch(err => res.status(400).json('Error: ' + err))
    });
module.exports = router;