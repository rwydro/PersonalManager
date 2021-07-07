import React from "react";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import './Button.scss'
import deepClassNames from "coreModule/helpers/deepClassNames";

const Button = ({children, text, size, onClick, isClicked}) => {

    const renderTooltip = () => (
        <Tooltip className="tooltip-arrow bs-tooltip-auto" id="button-tooltip">
            {text}
        </Tooltip>
    );

    const buttonClass = `button ${deepClassNames({
       'button': {
           '--isClicked': isClicked,
       },
    })}`;

    return (
        <OverlayTrigger
            placement="right"
            delay={{ show: 200, hide: 200}}
            overlay={renderTooltip()}
        >
            <div className={buttonClass} onClick={() => onClick()}>
                {children}
            </div>
        </OverlayTrigger>
    )
};

export default Button;