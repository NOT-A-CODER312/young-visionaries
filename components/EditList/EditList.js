import styles from "./EditList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

export default function EditList() {
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
    console.log(e.target.files[0]);
    setUploadImage(e.target.files[0]);
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

    const formData = new FormData(formRef.current);
    formData.append("image", uploadImage);
    formData.append("eventName", eventName);
    formData.append("eventDes", eventDes);
    formData.append("date", date);
    formData.append("active", true);
    console.log(formData);

    await fetch(`http://localhost:3009/events/postEvent`, {
      method: "post",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      body: formData,
    });
  }

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
            onSubmit={FormOnSubmit}
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

            <div>
              <label>Upload Image</label>
              <br />
              <input
                type="file"
                id="image"
                name="image"
                value={uploadImageName}
                onChange={ImageOnChange}
              />
            </div>
            <button className={styles.eventSubmitButton}>Submit Event</button>
          </form>
        </div>
      )}
    </div>
  );
}
