const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlist = new Schema({
  name: { type: String },
  user: {
    type: mongoose.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Playlist", playlist);
