const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    idBussiness: {
      type: String,
      require: true,
    },
    eventType: {
      type: Boolean,
      required: true,
    },
    eventAddress: {
      city: String,
      district: String,
      ward: String,
      street: String,
    },
    eventDescription: {
      type: String,
      required: true,
      minlength: 10,
    },
    eventPictureURL: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
