import './App.css';
import {connect} from "react-redux";
import React from 'react';
import AuthenticationPanelContainer from "authenticationModule/containers/AuthenticationPanelContainer";
import LayoutPanelContainer from "./layoutModule/containers/LayoutPanelContainer";
import {Button} from "react-bootstrap";
import {dispatch} from "./redux/store";
import './App.scss';

const App = props => {

  return (
      <div>
        {!props.userData ?  <AuthenticationPanelContainer/> : <LayoutPanelContainer />}
      </div>

  );
};

const mapStateToProps = ({authentication}) => {
  return {
    userData: authentication.userData,
  }
};

export default connect(mapStateToProps)(App);