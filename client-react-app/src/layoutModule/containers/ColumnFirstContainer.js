import {connect} from "react-redux";
import ColumnFirst from "layoutModule/components/ColumnFirst";
import {getUsersForIssue, getIssues} from "issueModule/actions/issueActions";
import React from "react";

const Container = props => <ColumnFirst {...props}/>;


const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => ({
    onClickIssuesButton: () => {
        dispatch(getUsersForIssue());
        dispatch(getIssues());
    }
});

const ColumnFirstContainer = connect(null, mapDispatchToProps)(Container);

export default ColumnFirstContainer;