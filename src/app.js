const express = require("express");

const app = express();

const helmet = require("helmet");

const cors = require("cors");
const evnetsListRouter = require("./routes/events/eventsList.router");
const userListener = require("./routes/user/user.router");
// const bodyParser = require("body-parser");

app.use(express.json({ limit: "50mb" }));

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());
// app.use(function (req, res, next) {
//   console.log(req.body, "dsfs"); // populated!
//   next();
// });

app.set("view engine", "ejs");
app.use(
  cors({
    origin: "*",
  })
);
// app.use(express.json());
app.use("/events", evnetsListRouter);
app.use("/user", userListener);

module.exports = app;
