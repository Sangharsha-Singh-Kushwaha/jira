import { Label, Input } from "reactstrap";
import { BsSearch } from "react-icons/bs";
import classes from "./FormAndButton.module.css";
const FormAndButton = () => {
  return (
    
      <div className={classes.search}>
        <Label for="search"></Label>
              <Input type="search" name="search" id="search" placeholder="Serach"/>
              
      </div>
   
  );
};

export default FormAndButton;
