import React from "react";


const CheckBox = ({ name = "DefaultField"}) => {
  return (<input type={"checkbox"} name={name}/>);
};

export default CheckBox;
