import CharityList from "../../components/CharityList/charityList";
import EditList from "../../components/EditList/EditList";
import charityList from "../../List/charityList";
import styles from "../../styles/eventIndex.module.css";

export default function MainCharityPage() {
  return (
    <div className="mainCharityListFlex">
      <div className="pageTitle">Events</div>
      <div className={styles.editList}>
        <EditList />
      </div>
      <div className="cardList">
        <CharityList charityList={charityList} />
      </div>
    </div>
  );
}
