import React, { Fragment } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import classes from "./BreadcrumbBoard.module.css";
const BreadcrumbBoard: React.FC<{ title1: string ,title2:string, title3:string}> = (props) => {
  return (
    <Fragment>
      <Breadcrumb className={classes.breadcrumb}>
        <BreadcrumbItem>{props.title1}</BreadcrumbItem>
        <BreadcrumbItem>{props.title2}</BreadcrumbItem>
        <BreadcrumbItem>{props.title3}</BreadcrumbItem>
      </Breadcrumb>
    
    </Fragment>
  );
};

export default BreadcrumbBoard;
