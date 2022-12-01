import styles from "./EditList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import useStore from "../zustandStates/store";
import { useRouter } from "next/router";

export default function EditList({ edit, filterListState }) {
  const router = useRouter();
  const addUniSwitch = useStore((state) => state.addUniSwitch);
  const uniSwitch = useStore((state) => state.uniSwitch);
  const charityList = useStore((state) => state.charityList);

  const [editClick, setEditClick] = useState(true);
  const [uploadImageName, setUploadImageName] = useState("");
  const [uploadImage, setUploadImage] = useState("");
  const [date, setDate] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDes, setEventDes] = useState("");

  const formRef = useRef();

  function OnClickEdit() {
    setEditClick(!editClick);
  }
  function ImageOnChange(e) {
    setUploadImageName(e.target.value);
  }
  function DateOnChange(e) {
    setDate(e.target.value);
  }
  function EventNameOnChange(e) {
    setEventName(e.target.value);
  }
  function EventDesOnChange(e) {
    setEventDes(e.target.value);
  }
  async function FormOnSubmit(e) {
    e.preventDefault();

    await fetch(`http://localhost:3009/events/postEvent`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventName,
        eventDes,
        date,
        active: true,
        imageLink: uploadImageName,
      }),
    }).then(() => addUniSwitch(!uniSwitch));
  }

  async function FormOnSubmitEdit(e) {
    e.preventDefault();

    let eName = eventName;
    let eDes = eventDes;
    let eDate = date;
    let eLink = uploadImageName;

    if (eventName === "") {
      eName = filterListState.eventName;
    }
    if (eventDes === "") {
      eDes = filterListState.eventDes;
    }
    if (uploadImageName === "") {
      eLink = filterListState.imageLink;
    }
    if (date === "") {
      eDate = filterListState.date;
    }
    console.log(
      {
        eName,
        eDate,
        eDate,
        active: true,
        eLink,
      },
      charityList,
      "eevent"
    );

    await fetch(`http://localhost:3009/events/postEvent/edit`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eName,
        eDes,
        eDate,
        active: true,
        eLink,
        id: filterListState._id,
      }),
    }).then(() => {
      addUniSwitch(!uniSwitch);
      router.push("/events/" + eName);
    });
  }

  const onClickHandlerDelete = async () => {
    await fetch(`http://localhost:3009/events/delete/${filterListState._id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      addUniSwitch(!uniSwitch);
      router.push("/events");
    });
  };
  return (
    <div className={styles.mainDiv}>
      <div className={styles.faPlusHoverText} data-hover="Edit List">
        <FontAwesomeIcon
          icon={editClick ? faCirclePlus : faCircleMinus}
          className={styles.faPlus}
          onClick={OnClickEdit}
        />
      </div>
      {editClick ? (
        <></>
      ) : (
        <div className={styles.formMainDiv}>
          <div className={styles.formHeader}>Add Event</div>

          <form
            className={styles.eventForm}
            onSubmit={edit ? FormOnSubmitEdit : FormOnSubmit}
            ref={formRef}
          >
            <div className={styles.eventName}>
              <label>Event Name</label>
              <input
                placeholder="Event Name"
                className={styles.eventName}
                onChange={EventNameOnChange}
                value={eventName}
              />
            </div>
            <div className={styles.eventName}>
              <label>Event Description</label>
              <textarea
                placeholder="Event Description"
                className={styles.eventDes}
                onChange={EventDesOnChange}
                value={eventDes}
                maxLength={100}
              />
            </div>

            <div className={styles.dateSelector}>
              <label>Event Date</label>
              <input
                type="date"
                id="date"
                name="date"
                className={styles.dateSelector}
                onChange={DateOnChange}
              />
            </div>

            <div className={styles.dateSelector}>
              <label>Event Image Link</label>
              <input
                type="text"
                id="img"
                name="img"
                className={styles.dateSelector}
                onChange={ImageOnChange}
                value={uploadImageName}
              />
            </div>
            <button className={styles.eventSubmitButton}>Submit Event</button>
          </form>
          <button
            className={edit ? styles.deleteButton : "displayNone"}
            onClick={onClickHandlerDelete}
          >
            Delete Event
          </button>
        </div>
      )}
    </div>
  );
}
