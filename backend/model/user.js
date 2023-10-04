
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ['vendor', 'client', 'attendee','admin'], required: true },
  companyName: { type: String },
  companyAddress: { type: String },
  domain: { type: String },
  varified:{
    type:Boolean,
    default:false
  }
});

module.exports = mongoose.model('User', userSchema);