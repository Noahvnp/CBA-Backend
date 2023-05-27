const dotenv = require("dotenv");
dotenv.config();

const config = {
  app: {
    port: process.env.PORT || 8000,
  },

  db: {
    uri: process.env.MONGODB_URI || "mongodb://localhost",
  },
};

module.exports = config;
