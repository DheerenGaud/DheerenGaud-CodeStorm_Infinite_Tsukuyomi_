const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const Router1=require("./Router/router1.js")
const Router2=require("./Router/router2.js")
const Router3=require("./Router/router3.js")
const mongoose = require("mongoose");
// const connected = require("./db/db")

app = express();

app.use(cors({ origin: "http://localhost:5173", methods: ["GET", "POST"] }));
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

const connected = async () => {
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/tsec", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log("database is connected...");
        } catch (error) {
            console.log("some error in connecting database");
       }
  };
        
connected();
app.use("/public",express.static('public'))


app.use("/auth",Router1);
app.use("/client",Router2);
app.use("/event",Router3)
app.get("/",(req,res)=>{
  res.send("hello")
})


app.listen(9000,()=>{
  console.log(" server is listen on port 9000")
})


