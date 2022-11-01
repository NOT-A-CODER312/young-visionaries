import classes from "../../styles/homePage.module.css";
import { Fragment, useState } from "react";

export default function Table({ para, fetchSent }) {
  return (
    <div>
      <div className={classes.tTable}>
        <div className={classes.tHeadMain}>
          <div>
            <div>Nltk</div>
          </div>
          <div className={classes.tTable1}>
            <div className={classes.ps}>Positive</div>
            <div className={`${classes.ps} ${classes.ps1}`}>
              {`${
                typeof fetchSent.pos !== "undefined" ? fetchSent.pos + "%" : " "
              }`}
            </div>
          </div>
          <div className={classes.tTable1}>
            <div className={classes.ps}>Negative</div>
            <div className={`${classes.ps} ${classes.ps1}`}>
              {`${
                typeof fetchSent.neg !== "undefined" ? fetchSent.neg + "%" : " "
              }`}
            </div>
          </div>
          <div className={classes.tTable1}>
            <div className={classes.ps}>Neutral</div>
            <div className={`${classes.ps} ${classes.ps1}`}>
              {`${
                typeof fetchSent.neu !== "undefined" ? fetchSent.neu + "%" : " "
              }`}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.tTable}>
        <div className={classes.tHeadMain}>
          <div>
            <div>Text Blob</div>
          </div>
          <div className={classes.tTable1}>
            <div className={classes.ps}>Polarity</div>
            <div className={`${classes.ps} ${classes.ps1}`}>
              {fetchSent["text-blob"]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
