const express =require("express");
const Router=express.Router();
const EventModel = require("../model/event")
const formidable = require("express-formidable");
const fs = require('fs')
const {tokenVerify} = require("../commonFunction/helper")
require("dotenv").config();

// Router.use(formidable());

Router.post("/add-event",async(req,res)=>{

    try{
     const {token} = req.fields;
    
      const x= await tokenVerify(token) 
      if(x.status==="error"){
         return res.json(x);
      }
      else{
         const user= x.data;
         console.log(user);
         const existingEvent = await EventModel.findOne({
             eventStartDateTime: req.fields.eventStartDateTime,
             eventAdmin: user._id,
           });
 
           if (existingEvent) {
             return res.json({
               status: "error",
               data: "ADMIN already registered for an event with the same start time.",
             });
           }
           const overlapEvent = await EventModel.findOne({
             eventStartDateTime: { $lte: req.fields.eventEndDateTime },
             eventEndDateTime: { $gte: req.fields.eventStartDateTime },
           });
     
           if (overlapEvent) {
             return res.json({
               status: "error",
               data: "An event already exists within this time range.",
             });
           }
 
        const eventImage = req.files.eventImage;
       const newEvent = new EventModel({ ...req.fields,eventAdmin:user._id});
       if(eventImage){
                 newEvent.eventImage.data = fs.readFileSync(eventImage.path);
                 newEvent.eventImage.contentType = eventImage.type;
       }
       await newEvent.save();
       res.status(201).json({
         status:"ok",
         data:"Event quote send ",
         newEvent
       })
     }
     } catch (err) {
       console.error(err);
       res.status(500).send({
         status:"error",
         data: 'Internal Server Error' 
       })
     }
 })
 

Router.post("/eventData",async(req,res)=>{
    const {token,stage}=req.body;
    console.log(req.body);
    try {
    const x= await tokenVerify(token) 
   
    if(x.status==="error"){
       return res.json(x);
    }
    else{
        const user = x.data;
        EventModel.find({eventAdmin:user._id,eventStatus:stage})
        .then((result)=>{
              return res.json({ status: "ok", data:result })
        }).catch(()=>{
            return  res.json({status:"error",data:"Erroe occure while finding event"}) 
        })
    }
  } catch (error) {
    console.log(error)
    res.json({status:"error",data:"Error occure while find event based on satge"})

  }
})


module.exports= Router