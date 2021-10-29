import React from "react";
import classes from "./PageNameAndButton.module.css";
import { BsGithub } from "react-icons/bs";
const PageNameAndButton = () => {
    return (
        <div className={classes.page} >
            <h1>Kanban Board</h1>
            <button><BsGithub className={classes.giticon }/>Github Repo</button>
        </div>
    );
}
export default PageNameAndButton;