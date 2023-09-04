const mongoose = require("mongoose");

const { Schema } = mongoose;

const VidInfoSchema = new Schema({
  name: String,
  url: String,
  thumbnailUrl: String,
  characters: [String],
});

module.exports = mongoose.model("VidInfo", VidInfoSchema);