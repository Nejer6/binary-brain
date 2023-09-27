import React, {useState} from "react";
import Testbutton from "./Testbutton";

const ButtonGroup = ({isSelected}) => {

  const [button1Selected, setButton1Selected] = useState(isSelected === "button1");
  const [button2Selected, setButton2Selected] = useState(isSelected === "button2");

  const handleButtonClick = (buttonId) => {
    if (buttonId === "button1") {
      setButton1Selected(true);
      setButton2Selected(false);
    } else if (buttonId === "button2") {
      setButton1Selected(false);
      setButton2Selected(true);
    }
  };

  
  return (
    <>
    <div className="flex flex-row">
        <Testbutton isSelected={button1Selected} id="button1" className="h-16 w-40 mt-6" text="Нужна разработка" onClick={() =>handleButtonClick("button1")}/>
        <Testbutton isSelected={button2Selected} id="button2" className="h-16 w-40 mt-6" text="Уже есть" onClick={() =>handleButtonClick("button2")}/>
    </div>
      
    </>
  );
};

export default ButtonGroup;