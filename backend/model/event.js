// const mongoose = require('mongoose');
// const eventSchema = new mongoose.Schema({
//     eventName: {
//         type: String,
//         required: true,
//       },
//       eventBudget: {
//         type: Number,
//         required: true,
//       },
//       eventCategory: {
//         type: String,
//         enum: ['Entertainment', 'Anniversary & Birthday', 'Wedding', 'Seminar', 'Conference'],
//         required: true,
//       },
//       eventStatus: {
//         type: String,
//         enum: ['Verfied', 'Pending', 'Completed'],
//         default: 'Pending',
//         required: true,
//       },
//       eventRequirements: {
//         food: {
//           type: Boolean,
//           default: false,
//         },
//         entertainment: {
//           type: Boolean,
//           default: false,
//         },
//         hospitality: {
//           type: Boolean,
//           default: false,
//         },
//       },
//       eventStartDateTime: {
//         type: Date,
//         required: true,
//       },
//       eventEndDateTime: {
//         type: Date,
//         required:true,
//       },
//       description: {
//         type: String,
//         required: true,
//       },
//       eventImage: {
//         data:Buffer,
//         contentType:String,
//       },
//       eventCapacity: {
//         type: Number,
//         required: true,
//       },
//       registeredUsers: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User', 
//       }],
//       eventAdmin:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User', 
//       }
// },{timestamps:true})
// module.exports=mongoose.model('EventModel',eventSchema)


const mongoose = require('mongoose');

const service={
  name:String,
  vendor_id:String,
  pricing:Number,
}
const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
   
  },
  eventBudget: {
    type: Number,
    required: true,
  },
  eventCategory: {
    type: String,
    enum: ['Entertainment', 'Anniversary & Birthday', 'Wedding', 'Seminar', 'Conference'],
    required: true,
  },
  eventStatus: {
    type: String,
    enum: ['Verified', 'Pending', 'Completed'],
    default: 'Pending',
    required: true,
  },
  eventCustomRequirements:[
    service
  ],
  eventStartDateTime: {
    type: Date,
    required: true,
  },
  eventEndDateTime: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  eventImage: {
    fileName: String,
    filePath: String
  },
  eventCapacity: {
    type: Number,
    required: true,
  },
  eventattendes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Attendee',
  }],
  eventAdmin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  eventlocation: {
    type: String,
    require:true
  },

}, { timestamps: true });

module.exports = mongoose.model('EventModel', eventSchema);