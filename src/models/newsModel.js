const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    idCreator: {
      type: String,
      require: true,
    },
    newsTitle: {
      type: String,
      required: true,
      minlength: 10,
    },
    newsDescription: {
      type: String,
      required: true,
      minlength: 10,
      // maxlength: 50,
    },
    newsPictureURL: {
      type: String,
      // required: true,
      minlength: 6,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", newsSchema);
