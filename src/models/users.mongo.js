const { Schema, model } = require("mongoose");

const usersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    required: true,
  },
  votedVP: {
    type: Boolean,
    required: true,
  },
  VotedTreasurer: {
    type: Boolean,
    required: true,
  },
});

module.exports = model("users", usersSchema);
