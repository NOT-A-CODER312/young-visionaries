const { Schema, model } = require("mongoose");

const eventsSchema = new Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventDes: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
    // required: true,
  },
});

module.exports = model("eventsList", eventsSchema);
