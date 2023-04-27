import classes from "./EventList.module.css";
import uniqid from "uniqid";
import EventCard from "./EventCard";
import Link from "next/link";
import { charityListFirst } from "../../List/charityList";

export default function EventList({ eventList }) {
  if (eventList) {
    eventList.map((obj) => (obj["url"] = "/events/" + obj.eventName));
    console.log(eventList, "map");

    return (
      <div className={classes.mainCardList}>
        {eventList.map(({ imageLink, eventName, eventDes, url }) => (
          <div key={uniqid()}>
            <EventCard
              img={imageLink}
              title={eventName}
              des={eventDes}
              url={url}
            />
          </div>
        ))}
      </div>
    );
  }
}
