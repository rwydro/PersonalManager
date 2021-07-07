import React from "react";
import {connect} from "react-redux";
import IssuesList from "../components/IssuesList";
import {getUserById} from "../../coreModule/helpers/getUserById";

const Container = props => {
    if(!props.users){
        return null;
    }

    return (
        <>
            <IssuesList users={props.users} issueList={props.assignedIssues} text="Twoje zadania"/>
            <IssuesList users={props.users} issueList={props.issueCreatedByUser} text="Zadania stworozne przez ciebie"/>
        </>
    );
}

const mapStateToProps = ({issues, authentication}, ownProps) => {
    if(!issues.issueList || !issues.usersData){
        return ;
    }
    const currentUser = issues.usersData.find(el => el?.userIdentifier ===
        authentication.userData.accessToken);
    return {
        assignedIssues: issues.issueList.filter(el => {
           if(el.assignedUser === currentUser?.userIdentifier){
               el.author = getUserById(issues.usersData, el.author);
               el.assignedUser= getUserById(issues.usersData, el.assignedUser);
               return el;
           }
        }),
        issueCreatedByUser: issues.issueList.filter(el => {
            if(el.author === currentUser?.userIdentifier){
                el.author = getUserById(issues.usersData, el.author);
                el.assignedUser= getUserById(issues.usersData, el.assignedUser);
                return el;
            }
        }),
        users: issues.usersData,
        currentUser
    }
};

const mapDispatchToProps = dispatch => ({
   // createIssue: data =>  dispatch(createIssue(data))
});

const IssuesListContainer = connect(mapStateToProps)(Container);

export default IssuesListContainer;