import classes from "./EventSuggest.module.css";
import React from "react";


export default function EventSuggest() {

    return (
        <div className={classes.suggest}>
            <form action="/send-data-here" method="post">
                <label className={classes.label} for="etype">Event Type:</label>
                <br />
                <select>
                    <option disabled>Select Type</option>
                    <option>Fundraiser</option>
                    <option>Party</option>                    
                    <option>Festival</option>
                    <option>Confrence</option>
                    <option>Sport</option>
                </select>
                {/*<input className={classes.input1} type="text" id="etype" name="etype" required maxLength="30"  /> */}
                <br /><br />
                <label className={classes.label} for="purpose">Purpose of the Event:</label>
                <br />
                <input className={classes.input2} type="text" id="purpose" name="purpose" required minLength="20" maxLength="100" />
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
        
    );
}