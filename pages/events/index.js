import EventList from "../../components/EventsList/EventList";
import EditList from "../../components/EditList/EditList";
import charityList from "../../List/charityList";
import styles from "../../styles/eventIndex.module.css";
import { useSession } from "next-auth/react";
import useStore from "../../components/zustandStates/store";

export default function MainCharityPage() {
  const admin = useStore((state) => state.admin);
  const { data: session } = useSession();

  console.log(admin, "admin");

  return (
    <div className="mainCharityListFlex">
      <div className="pageTitle">Events</div>
      {session ? (
        admin ? (
          <div className={styles.editList}>
            <EditList />
          </div>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}

      <div className="cardList">
        <EventList eventList={charityList} />
      </div>
    </div>
  );
}
