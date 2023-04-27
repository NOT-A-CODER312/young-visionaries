import { useRouter } from "next/router";
import { filtereList, charitySiteList } from "../../List/charityList";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./pid.module.css";
import useStore from "../../components/zustandStates/store";
import EditList from "../../components/EditList/EditList";

export default function Charity() {
  // Sub backwards to gert valid number
  // make persons chose charity organizations that they want to send money
  const charityList = useStore((state) => state.charityList);
  const admin = useStore((state) => state.admin);

  const router = useRouter();
  const [filterListState, setFilteredListState] = useState("");
  const [form, setForm] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    setFormData(formData);
    form.reset();
  };

  useEffect(() => {
    const filteredList = filtereList(charityList, router.query.pid);
    if (filteredList !== undefined) {
      setFilteredListState(filteredList[0]);
      // console.log(filteredList, router.query.pid);
    }
  }, [router.query.pid, charityList]);
  console.log(filterListState, "fsdfd");

  if (!filterListState) {
    return <div>404 Page not found</div>;
  } else if (filterListState.imageLink !== undefined) {
    return (
      <div className="main-ch-div">
        <div className="ch-title">{filterListState.eventName}</div>
        <div className="img-ch">
          <Image
            src={filterListState.imageLink}
            height={500}
            width={500}
            // quality={100}
            priority
            className="img-ch"
          />
        </div>
        <div className="para">
          <div> {filterListState.date}</div>
          <div>{filterListState.eventDes}</div>
        </div>
        <div className={admin ? styles.EditEvent : "displayNone"}>
          <div className={styles.editEventName}>Edit Event</div>

          <EditList edit={true} filterListState={filterListState} />
        </div>
      </div>
    );
  }
}
