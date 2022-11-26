"use client";
import { useSession, signIn } from "next-auth/react";
import styles from "./signinNav.module.css";
import UserNavButton from "./userNav";

export default function SignUPNav() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div className={styles.dropDown}>
          <UserNavButton />
        </div>
      ) : (
        <button className={styles.buttonwhite} onClick={() => signIn()}>
          Sign in
        </button>
      )}
    </div>
  );
}
