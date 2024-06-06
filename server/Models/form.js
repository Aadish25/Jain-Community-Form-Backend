// models/FormData.js
const mongoose = require("mongoose");

const religiousAffiliationSchema = new mongoose.Schema({
  mandirMargi: {
    tapagacch: { type: Boolean, default: false },
    khartargacch: { type: Boolean, default: false },
    tristutik: { type: Boolean, default: false },
  },
  sthanakvasi: {
    shramanSangh: { type: Boolean, default: false },
    terapanth: { type: Boolean, default: false },
    sadhumargi: { type: Boolean, default: false },
    any: { type: Boolean, default: false },
  },
});

const rowSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  relation: String,
  bloodGroup: String,
  education: String,
  married: String,
});

const formDataSchema = new mongoose.Schema({
  leaderName: String,
  fatherName: String,
  gotra: String,
  address: String,
  originalResident: String,
  profession: String,
  officeAddress: String,
  mobileNumber: String,
  email: String,
  religiousAffiliation: religiousAffiliationSchema,
  achievement: String,
  rows: [rowSchema],
});

module.exports = mongoose.model("FormData", formDataSchema);
