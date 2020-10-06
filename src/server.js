const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
console.log(process.env.ATLAS_URI);
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true,useFindAndModify: false });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
const productrouter = require("./routes/productsrouter");
app.use("/products",productrouter);
const itemrouter=require('./routes/itemlist.js')
app.use("/itemlist",itemrouter);
const storerouter=require("./routes/storeroute")
app.use("/stores",storerouter)
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});