const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    CBAJoningTime: {
      type: String
    },
    bussinessAddress: {
      city: String,
      district: String,
    },
    bussinessIndustry: {
      type: String,
    },
    bussinessName: {
      type: String,
    },
    bussinessTaxID: {
      type: String,
    },
    bussinessPhoneNumber: {
      type: String,
    },
    bussinessEmail: {
      type: String,
    },
    bussinessCreateTime: {
      type: String,
    },
    bussinessRepresentative: {
      name: String,
      phoneNumber: String,
      email: {
        type: String,
        unique: true,
      },
      position: String,
    },
    picturePath: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
