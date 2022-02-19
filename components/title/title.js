import classes from "./title.module.css";

const Title = () => {
  return (
    <div className={classes.all_container}>
      <hr className={classes.title_line}></hr>
      <h2 className={classes.title}>強檔多益教材</h2>
      <hr className={classes.title_line}></hr>
    </div>
  );
};

export default Title;
