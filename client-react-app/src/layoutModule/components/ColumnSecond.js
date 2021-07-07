import React, {useState} from "react";
import './ColumnSecond.scss'
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import IssueNavBarContainer from "../../issueModule/containers/IssueNavBarContainer";
import secondColumnViewContext from "../secondColumnViewContext";
import IssuesListContainer from "../../issueModule/containers/IssuesListContainer";

const ColumnSecond = ({viewContext}) => {

    const renderView = () => {
      switch (viewContext) {
          case secondColumnViewContext.Issues:
              return (
                  <div>
                      <div className="row column-second__header-row d-flex align-items-center">
                          <IssueNavBarContainer/>
                      </div>
                      <div id="wrapper" className="p-5">
                          <IssuesListContainer/>
                      </div>
                  </div>
              );
          case secondColumnViewContext.WelcomeScreen:
          default:
              return(
                  <div>
                    <p>SIEMA</p>
                  </div>
              );
      }
    };


    return (
        <div className="col-lg d-inline-block">
            {renderView()}
        </div>
    )
};

export default ColumnSecond;