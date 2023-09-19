// models/geofence.js
const mongoose = require("mongoose");

const geofenceSchema = new mongoose.Schema({
  username: String,
  latitude: Number,
  longitude: Number,
  radius: Number,
  start_time: String,
  end_time: String,
});

const Geofence = mongoose.model("Geofence", geofenceSchema);

module.exports = Geofence;
