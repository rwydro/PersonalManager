import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import React, {useEffect, useState} from "react";
import "./DropDown.scss"

export const DropDownType  ={
    dark: 'dark',
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    info: 'info',
    danger: 'danger',
    warning:'warning',
    light:'light'
};

const DropDown = ({elementsArray, variant, selectedState, onElementSelectedCallback}) => {
    const [selectedElement, setSelectedElement] = useState(selectedState);

    useEffect(()=>{
        onElementSelectedCallback(selectedElement)
        }, [selectedElement]);

    return (
        <>
            {[DropdownButton].map((DropdownType, idx) => (
                <DropdownType
                    key={idx}
                    id={`dropdown-button-drop-${idx}`}
                    size="sm"
                    title={selectedElement}
                    variant={variant}
                    class="dropdown"
                >
                    {
                        elementsArray.map((el, id)=>(
                            <Dropdown.Item ke={id}  onSelect={(event) => setSelectedElement(event)} eventKey={el}>{el}</Dropdown.Item>
                        ))
                    }
                </DropdownType>
            ))}
        </>
    )
};

export default DropDown;