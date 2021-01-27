const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  schema of prescriptions for each patient
const prescriptionSchema = new Schema({
  username: { type: String, required: true },
  // each patient will have one prescription drug for now
  prescriptionDrug: { type: String, required: true },
  refillCount: { type: Number, required: true },
  // automatically create fields for when this username was created/modified
  timestamps: true,
})

const Prescription = mongoose.model('Prescription', prescriptionSchema).

module.exports = Prescription;