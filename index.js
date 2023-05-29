const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const authRoute = require("./src/routes/authRoute");
const userRoute = require("./src/routes/userRoute");
const sendMail = require("./src/routes/sendMailRoute");
const newsRoute = require("./src/routes/newsRoute")
const eventRoute = require("./src/routes/eventRoute")

const config = require('./src/configs');

const PORT = config.app.port;
const MONGO_URL = config.db.uri;

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.use("/v1/sendmail", sendMail);
app.use("/v1/news", newsRoute);
app.use("/v1/event", eventRoute);

// database connection
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to database!"))
  .catch((err) => console.error(err));

// Route


app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
