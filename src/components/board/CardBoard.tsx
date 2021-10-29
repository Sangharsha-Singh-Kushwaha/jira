import React from "react";
import classes from "./CardBoard.module.css";
import { Card } from "reactstrap";

const CardBoard: React.FC<{ text: string }> = (props) => {
   return (
     <div className={classes.boardcard}>
       <Card className={classes.content}>
         <p>{props.text}</p>
       </Card>
     </div>
   );
}
export default CardBoard;
