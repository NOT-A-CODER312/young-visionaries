const eventsListDB = require("./eventsList.mongo");

async function getAllEvents() {
  return await eventsListDB.find(
    {},
    {
      __v: 0,
    }
  );
}

async function addEvent(event) {
  try {
    const events = await eventsListDB.findOneAndUpdate(
      {
        eventName: event.eventName,
        date: event.date,
      },
      event,
      {
        upsert: true,
      }
    );
    // console.log(events);
    return events;
  } catch (e) {
    console.error(e);
    return false;
  }
}
async function EditEvent(event) {
  try {
    const events = await eventsListDB.findOneAndUpdate(
      {
        _id: event.id,
      },
      {
        eventName: event.eName,
        eventDes: event.eDes,
        imageLink: event.eLink,
        date: event.eDate,
      },
      {
        upsert: true,
      }
    );
    // console.log(events);
    return events;
  } catch (e) {
    console.error(e);
    return false;
  }
}
async function deleteEvent(id) {
  try {
    const events = await eventsListDB
      .findByIdAndDelete(
        {
          _id: id,
        },
        function (err, docs) {
          if (err) {
            console.log(err);
          } else {
            console.log("Deleted User : ", docs);
          }
        }
      )
      .clone();
    // console.log(events);
    return events;
  } catch (e) {
    console.error(e);
    return false;
  }
}

module.exports = {
  getAllEvents,
  addEvent,
  EditEvent,
  deleteEvent,
};
