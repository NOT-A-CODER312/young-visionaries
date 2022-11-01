import classes from "./charityCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function CharityCard({ img, title, des, url }) {
  return (
    <Link href={url}>
      <div className={classes.mainCard}>
        <div className={classes.img}>
          <Image src={img} layout="responsive" width={3} height={2} />
        </div>
        <div className={classes.title}>{title}</div>
        <div className={classes.des}>{des}</div>
      </div>
    </Link>
  );
}
