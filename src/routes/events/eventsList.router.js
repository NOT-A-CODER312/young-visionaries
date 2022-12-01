const express = require("express");

const eventsListRouter = express.Router();

const {
  httpPostEvent,
  httpPostImage,
  httGetAllEvents,
  httpPostEventEdit,
  httGetDelete,
} = require("./eventsList.controller");

eventsListRouter.get("/", httGetAllEvents);
eventsListRouter.get("/delete/:id", httGetDelete);
eventsListRouter.post("/postEvent", httpPostEvent);
eventsListRouter.post("/postEvent/edit", httpPostEventEdit);
eventsListRouter.post("/postImage", httpPostImage);

module.exports = eventsListRouter;
