import React from "react";
import ColumnFirstContainer from "layoutModule/containers/ColumnFirstContainer";
import ColumnSecondContainer from "layoutModule/containers/ColumnSecondContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LayoutPanel.scss'

export const LayoutPanel = () => {
    return(
        <div className="container-fluid overflow-hidden">
            <div className="row d-flex" style={{height: '100vh'}}>
                <ColumnFirstContainer/>
                <ColumnSecondContainer/>
            </div>
        </div>
    )
};

export default LayoutPanel;