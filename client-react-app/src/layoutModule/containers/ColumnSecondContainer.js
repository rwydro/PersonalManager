import {connect} from "react-redux";
import ColumnSecond from "layoutModule/components/ColumnSecond";
import {loginUser} from "authenticationModule/actions/authenticationActions";
import React from "react";

const Container = props => <ColumnSecond {...props}/>;


const mapStateToProps = ({layout}) => {
    return {
        viewContext: layout.secondColumnView
    }
};

const mapDispatchToProps = dispatch => ({
    loginUser: data =>  dispatch(loginUser(data))
});

const ColumnSecondContainer = connect(mapStateToProps, mapDispatchToProps)(Container);

export default ColumnSecondContainer;