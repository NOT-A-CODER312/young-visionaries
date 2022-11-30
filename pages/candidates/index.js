import styles from "./candidates.module.css";
import { useState, useEffect } from "react";

export default function Candidates() {
  useEffect(() => {
    fetch(link + "/");
  }, []);

  return (
    <div className={styles.mainDiv}>
      <div className={styles.mainText}>Voting Is A Right</div>
      <div className={styles.candidatesName}>
        Treasurer
        <div></div>
      </div>
    </div>
  );
}
