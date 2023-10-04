const express = require("express");
const Router = express.Router();
const EventModel = require("../model/event");

const fs = require("fs");
const { tokenVerify } = require("../commonFunction/helper");
require("dotenv").config();

const multer = require("multer");

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uplode"); // Specify your destination folder for event images
  },
  filename: (req, file, cb) => {
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage });

// POST route to add an event with token verification
// Router.post(
//   "/add-event",
//   upload.single("eventImage"), // Use multer to handle file upload
//   async (req, res) => {
//     try {
//       const { token, ...eventData } = req.body;

//       // Verify the token here using your token verification module
//       const tokenVerificationResult = await tokenVerify(token);
     
//       if (tokenVerificationResult.status === "error") {
//         console.log(tokenVerificationResult);
//         return res.json(tokenVerificationResult);
//       }

//       const user = tokenVerificationResult.data;

//       const existingEvent = await EventModel.findOne({
//         eventStartDateTime: eventData.eventStartDateTime,
//         eventAdmin: user._id,
//       });

//       if (existingEvent) {
//         return res.json({
//           status: "error",
//           data:
//             "ADMIN already registered for an event with the same start time.",
//         });
//       }

//       const overlapEvent = await EventModel.findOne({
//         eventStartDateTime: { $lte: eventData.eventEndDateTime },
//         eventEndDateTime: { $gte: eventData.eventStartDateTime },
//       });

//       if (overlapEvent) {
//         return res.json({
//           status: "error",
//           data: "An event already exists within this time range.",
//         });
//       }

//       // Process event image if it exists
//       if (req.file) {
//         eventData.eventImage = {
//           data: fs.readFileSync(req.file.path),
//           contentType: req.file.mimetype,
//         };
//       }

//       const newEvent = new EventModel({
//         ...eventData,
//         eventAdmin: user._id,
//       });

//       await newEvent.save();

//       res.status(201).json({
//         status: "ok",
//         data: "Event quote sent",
//         newEvent,
//       });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({
//         status: "error",
//         data: "Internal Server Error",
//       });
//     }
//   }
// );

Router.post("/add-event", async (req, res) => {
  try {
    const { token } = req.body;
   
    const x = await tokenVerify(token);
    if (x.status === "error") {
      return res.json(x);
    } else {
      const user = x.data;
      console.log(user);

      // Check if the user already has an event with the same start time
      const existingEvent = await EventModel.findOne({
        eventStartDateTime: req.body.eventStartDateTime,
        eventAdmin: user._id,
      });

      if (existingEvent) {
        return res.json({
          status: "error",
          data: "ADMIN already registered for an event with the same start time.",
        });
      }

      // Check if the new event overlaps with any existing events
      const overlapEvent = await EventModel.findOne({
        eventStartDateTime: { $lte: req.body.eventEndDateTime },
        eventEndDateTime: { $gte: req.body.eventStartDateTime },
      });

      if (overlapEvent) {
        return res.json({
          status: "error",
          data: "An event already exists within this time range.",
        });
      }
     const ans=req.body.eventCustomRequirements.map((element)=>{
        return {name:element,vendor_id:"",pricing:-1}
     })

      // Create a new Event document and set the eventAdmin to the user's ID
      const newEvent = new EventModel({ ...req.body, eventAdmin: user._id,eventCustomRequirements:ans});
      // if (eventImage) {
      //   // Store the image path in eventImage
      //   newEvent.eventImage = eventImage;
      // }

      await newEvent.save();

      res.status(201).json({
        status: "ok",
        data: "Event quote sent.",
        newEvent
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      data: 'Internal Server Error'
    });
  }
});

module.exports= Router


module.exports = Router;

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