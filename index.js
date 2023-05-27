const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const config = require('./src/configs');

const PORT = config.app.port;
const MONGO_URL = config.db.uri;

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to database!"))
  .catch((err) => console.error(err));

// Route


app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
