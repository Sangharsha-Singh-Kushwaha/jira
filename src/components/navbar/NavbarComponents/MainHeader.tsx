import classes from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <div className={classes.mainheader}>
      <div>
        <img src="logo192.png" className={classes.img} />
      </div>
      <div className={classes.content}>
        <p>
          singularity 1.0 <br />
          <span>Software Project</span>
        </p>
      </div>
    </div>
  );
};

export default MainHeader;
