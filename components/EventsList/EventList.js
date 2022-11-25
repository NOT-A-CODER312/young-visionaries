import classes from "./EventList.module.css";
import uniqid from "uniqid";
import EventCard from "./EventCard";
import Link from "next/link";
import { charityListFirst } from "../../List/charityList";

export default function EventList({ eventList }) {
  return (
    <div className={classes.mainCardList}>
      {charityListFirst.map(({ img, title, des, url }) => (
        <div key={uniqid()}>
          <EventCard img={img} title={title} des={des} url={url} />
        </div>
      ))}
    </div>
  );
}
