const {
  addEvent,
  getAllEvents,
  EditEvent,
  deleteEvent,
} = require("../../models/eventsList.model");
// var imgModel = require("./model");
const imgModel = require("../../models/eventsList.mongo");
const fs = require("fs");
const path = require("path");

async function httGetAllEvents(req, res) {
  try {
    const events = await getAllEvents();
    // console.log(user, "user");
    return res.json(events);
  } catch (e) {
    console.error(e);
  }
}

async function httpPostEvent(req, res) {
  try {
    const event = req.body;
    console.log(req.body);
    if (
      !event.eventName ||
      !event.date ||
      !event.active ||
      !event.eventDes ||
      !event.imageLink
    ) {
      console.log({
        error: "Missing required data",
        event,
      });
      return res.status(400).json({
        error: "Missing requireed data",
        event,
      });
    }

    const addEventToList = await addEvent(event);

    if (addEventToList !== null) {
      console.log({ added: "exist", event });
      return res.status(409).json({ added: "exist" });
    }
    if (addEventToList === false) {
      console.log({ added: false, event });
      return res.status(409).json({ added: false });
    }
    if (addEventToList === null) {
      console.log({ added: true, event });
      return res.json({ added: true });
    }
  } catch (e) {
    console.error(e);
  }
}
async function httpPostEventEdit(req, res) {
  try {
    const event = req.body;
    console.log(req.body);
    if (
      !event.eName ||
      !event.eDes ||
      !event.eDate ||
      !event.active ||
      !event.eLink ||
      !event.id
    ) {
      console.log({
        error: "Missing required data",
        event,
      });
      return res.status(400).json({
        error: "Missing requireed data",
        event,
      });
    }

    const addEventToList = await EditEvent(event);

    // if (addEventToList !== null) {
    //   console.log({ added: "exist", event });
    //   return res.status(409).json({ added: "exist" });
    // }
    // if (addEventToList === false) {
    //   console.log({ added: false, event });
    //   return res.status(409).json({ added: false });
    // }
    // if (addEventToList === null) {
    console.log({ added: true, event });
    return res.json({ added: true });
    // }
  } catch (e) {
    console.error(e);
  }
}

async function httGetDelete(req, res) {
  try {
    const eventId = req.params.id;
    const events = await deleteEvent(eventId);
    // console.log(user, "user");
    return res.json(events);
  } catch (e) {
    console.error(e);
  }
}

async function httpPostImage(req, res) {
  try {
    var obj = {
      name: req.body.name,
      desc: req.body.desc,
      img: {
        data: fs.readFileSync(
          path.join(__dirname + "/uploads/" + req.file.filename)
        ),
        contentType: "image/png",
      },
    };
    imgModel.create(obj, (err, item) => {
      if (err) {
        console.log(err);
      } else {
        // item.save();
        res.redirect("/");
      }
    });
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  httpPostEvent,
  httpPostImage,
  httGetAllEvents,
  httpPostEventEdit,
  httGetDelete,
};
