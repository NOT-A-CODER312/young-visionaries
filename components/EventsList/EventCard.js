import classes from "./EventCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function EventCard({ img, title, des, url }) {
  return (
    <Link href={url}>
      <div className={classes.mainCard}>
        <div className={classes.img}>
          <Image src={img} layout="responsive" width={6} height={2.5} />
        </div>
        <div className={classes.title}>{title}</div>
        <div className={classes.des}>{des}</div>
      </div>
    </Link>
  );
}
