import styles from "./userNav.module.css";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function UserNavButton() {
  return (
    <button className={styles.signOutButton} onClick={() => signOut()}>
      Log Out
    </button>
  );
}
