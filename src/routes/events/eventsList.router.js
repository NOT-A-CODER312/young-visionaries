const express = require("express");

const eventsListRouter = express.Router();
var multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

const {
  httpPostEvent,
  httpGetImage,
  httpPostImage,
} = require("./eventsList.controller");

eventsListRouter.get("/image", httpGetImage);
eventsListRouter.post("/postEvent", upload.single("image"), httpPostEvent);
eventsListRouter.post("/postImage", upload.single("image"), httpPostImage);

module.exports = eventsListRouter;
