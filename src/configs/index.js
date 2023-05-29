const dotenv = require("dotenv");
dotenv.config();

const config = {
  app: {
    port: process.env.PORT || 8000,
  },

  db: {
    // process.env.MONGODB_URI || 
    uri: process.env.MONGODB_URI || "mongodb://localhost:27017/CBA-Web",
  },
};

module.exports = config;
