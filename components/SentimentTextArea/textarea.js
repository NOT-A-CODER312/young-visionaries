import classes from "./textarea.module.css";

export default function TextArea({ placeHodlerText, onSetChange, isDisabled }) {
  return (
    <textarea
      className={classes.textarea}
      placeholder={placeHodlerText}
      onChange={onSetChange}
      disabled={isDisabled}
    />
  );
}
