import classes from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={classes.footerMain}>
      <p className={classes.footerP}>Best Tech Site</p>

      <div className={classes.footerLinks}>
        <Link href="">Terms and conditions</Link>
        <Link href="">Privacy policy</Link>
        <Link href="">About us</Link>
        <Link href="">Donate</Link>
        <Link href="">Contact us</Link>
      </div>
    </div>
  );
}
