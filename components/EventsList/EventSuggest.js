import classes from "./EventSuggest.module.css";
import React from "react";
import Select2 from "react-select2";

export default function EventSuggest() {
    return (
        <div className={classes.suggest}>
            <form action="/send-data-here" method="post">
                <label for="etype">Event Type:</label>
                <br />
                <input type="text" id="etype" name="etype" required minLength="10" maxLength="30"  />
                <br /><br />
                <label for="purpose">Purpose of the Event:</label>
                <br />
                <input type="text" id="purpose" name="purpose" required minLength="20" maxLength="100" />
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
        
    );
}