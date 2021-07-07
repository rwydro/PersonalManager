import {connect} from 'react-redux';
import AuthenticationPanel from 'authenticationModule/components/AuthenticationPanel';
import {loginUser, createUser} from 'authenticationModule/actions/authenticationActions';
import React from 'react';

const Container = props => <AuthenticationPanel {...props}/>;

const mapDispatchToProps = dispatch => ({
    loginUser: data =>  dispatch(loginUser(data)),
    createUser: data =>  dispatch(createUser(data)),
});

const AuthenticationPanelContainer = connect(null, mapDispatchToProps)(Container);

export default AuthenticationPanelContainer;