import "./Badge.scss"
import React  from "react";

const Badge = ({text, variant})=>{

    const className =`badge badge--${variant}`;

    return (
        <>
            <span className={className}>
                {text}
            </span>
        </>
    )
};

export default Badge;