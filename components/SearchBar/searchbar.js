import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./searchbar.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ searchPlaceHolder }) {
  return (
    <form>
      <div className={classes.searchDiv}>
        <input className={classes.searchBar} placeholder={searchPlaceHolder} />
        <button className={classes.SearchButton}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </form>
  );
}
