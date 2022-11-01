import classes from "./charityList.module.css";
import uniqid from "uniqid";
import CharityCard from "./charityCard";
import Link from "next/link";
import { charityListFirst } from "../../List/charityList";

export default function CharityList({ charityList }) {
  return (
    <div className={classes.mainCardList}>
      {charityListFirst.map(({ img, title, des, url }) => (
        <div key={uniqid()}>
          <CharityCard img={img} title={title} des={des} url={url} />
        </div>
      ))}
    </div>
  );
}
