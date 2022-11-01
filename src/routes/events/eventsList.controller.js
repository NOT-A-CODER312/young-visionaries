const { addEvent } = require("../../models/eventsList.model");
// var imgModel = require("./model");
const imgModel = require("../../models/eventsList.mongo");
const fs = require("fs");
const path = require("path");

async function httpPostEvent(req, res) {
  try {
    const event = req.body;
    console.log(req.body);
    if (
      !event.eventName ||
      !event.date ||
      !event.active ||
      !event.eventDes ||
      !event.image
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

    // if(event.date instanceof Date ){

    // }
    var obj = {
      eventName: event.eventName,
      eventDes: event.eventDes,
      date: event.date,
      image: {
        data: fs.readFileSync(
          path.join(__dirname + "/uploads/" + req.file.image)
        ),
        contentType: "image/png",
      },
    };
    console.log(obj);
    // imgModel.create(obj, (err, item) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     // item.save();
    //     res.redirect("/");
    //   }
    // });

    const addEventToList = await addEvent(obj);

    if (addEventToList !== null) {
      console.log({ added: "exist", obj });
      return res.status(409).json({ added: "exist" });
    }
    if (addEventToList === false) {
      console.log({ added: false, obj });
      return res.status(409).json({ added: false });
    }
    if (addEventToList === null) {
      console.log({ added: true, obj });
      return res.json({ added: true });
    }
  } catch (e) {
    console.error(e);
  }
}

async function httpGetImage(req, res) {
  try {
    imgModel.find({}, (err, items) => {
      if (err) {
        console.log(err);
        res.status(500).send("An error occurred", err);
      } else {
        res.render("imagesPage", { items: items });
      }
    });
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
  httpGetImage,
  httpPostImage,
};
