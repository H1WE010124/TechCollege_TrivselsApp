import style from "./IconButton.module.scss";

export const IconButton = ({ styling, callback, children, value }) => {
  return (
    <button className={`${style[styling]}`} onClick={() => callback(value)}>
      {children}
    </button>
  );
};
