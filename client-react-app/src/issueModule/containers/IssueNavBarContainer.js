import React from "react";
import {connect} from "react-redux";
import {createIssue} from "issueModule/actions/issueActions";
import IssueNavBar from "../components/IssueNavBar";

const Container = props => <IssueNavBar {...props}/>;

const mapStateToProps = state => {
    return {
        currentUser: state.authentication.userData,
        users: state.issues.usersData
    }
};

const mapDispatchToProps = dispatch => ({
    createIssue: data =>  dispatch(createIssue(data))
});

const IssueNavBarContainer = connect(mapStateToProps, mapDispatchToProps)(Container);

export default IssueNavBarContainer;