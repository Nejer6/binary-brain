import React from "react";
import SelectedButton from "./SelectedButton";

const ButtonGroup = ({isSelected, list, onClick}) => {
    return (
        <div className="flex flex-row mt-6">
            {list.map((text) =>
                <SelectedButton
                    isSelected={text === isSelected}
                    className="h-16 w-40"
                    text={text}
                    onClick={() => onClick(text)}
                    key={text}
                />
            )}
        </div>
    );
};

export default ButtonGroup;