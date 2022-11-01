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
    console.log(events);
    return events;
  } catch (e) {
    console.error(e);
    return false;
  }
}

module.exports = {
  getAllEvents,
  addEvent,
};
