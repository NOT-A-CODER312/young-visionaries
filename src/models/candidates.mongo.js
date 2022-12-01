const { Schema, model } = require("mongoose");

const candidatesSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});

module.exports = model("candidates", candidatesSchema);
