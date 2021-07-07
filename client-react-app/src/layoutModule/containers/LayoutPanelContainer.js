import {connect} from "react-redux";
import LayoutPanel from "layoutModule/components/LayoutPanel";
import {loginUser} from "authenticationModule/actions/authenticationActions";
import React from "react";

const Container = props => <LayoutPanel {...props}/>;


const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => ({
    loginUser: data =>  dispatch(loginUser(data))
});

const LayoutPanelContainer = connect(null, mapDispatchToProps)(Container);

export default LayoutPanelContainer;