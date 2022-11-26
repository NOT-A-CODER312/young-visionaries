import classes from "./navigationbar.module.css";
import { useState, Fragment, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import SignUPNav from "../signup/signinNav";

// import SearchBar from "../searchbar/SearchBar";

export default function NavigationBar() {
  const [click, setClick] = useState(false);

  const router = useRouter();

  const changeIcon = () => setClick(!click);

  useEffect(() => {
    if (click) {
      setClick(false);
    }
  }, [router.pathname]);

  const activeLink = ({ isActive }) =>
    isActive ? `${classes.navLinkActive}` : classes.navLinkActiveNone;

  return (
    <nav className={classes.mainNavDiv}>
      <div className={classes.logo}>
        <Link href="/">
          <div className={classes.img}>
            <Image
              src="/logoCircle.png"
              alt="help save the world with crypto"
              layout="responsive"
              height={2.8}
              width={3}
              priority
            />
          </div>
        </Link>
      </div>
      <div className={classes.navButtons}>
        <div className={classes.list}>
          <Link href="/events">Events</Link>
        </div>
        <div className={classes.list}>
          <Link href="/candidates">Roles</Link>
        </div>
        <SignUPNav />
      </div>
    </nav>
  );
}
