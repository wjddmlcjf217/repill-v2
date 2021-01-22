const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// patient schema with 2 mandatory fields, username and password for authentication
const patientSchema = new Schema({
  username: {
    type: String,
    // mandatory field of username
    required: true,
    unique: true,
    // trims whitespace
    trim: true,
    // username must be  at least 3 characters 
    minlength: 3
  },
  password: { type: Number, required: true },
  // automatically create fields for when this username was created/modified
  timestamps: true,
})

// creating instance of a schema "Patient" to export below
const Patient = mongoose.model('Patient', patientSchema).

module.exports = Patient;