import Link from "next/link";
import classes from "./seeCharities.module.css";

export default function SeeCharitiesButton({ link }) {
  return (
    <div className={classes.mainButton}>
      <Link href={link}>
        <div className={classes.mainButtonText}>See Events</div>
      </Link>
    </div>
  );
}
