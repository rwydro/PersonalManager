import React, {useState} from 'react';
import './AuthenticationPanel.scss';
import 'react-bootstrap/dist/react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import authenticationUserView from 'authenticationModule/authenticationUserView';
import debounce from 'lodash/debounce'
import UserAccountForm from "./UserAccountForm";

 const AuthenticationPanel = (props) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [authenticationPanelView, setView] = useState(authenticationUserView.CreateUserInfoView);
    const [count, setCount] = useState(0);


    const renderRightPanelView = () => {
        switch (authenticationPanelView) {
            case authenticationUserView.CreateUserInfoView:
                return (
                    <>
                        <h1 className="mb-4">Załóż konto</h1>
                        <Button type="submit" className="btn btn-primary rounded-pill"
                            onClick={() => setView(authenticationUserView.CreateUserAccountView)}>Submit</Button>
                    </>
                );
            case authenticationUserView.CreateUserAccountView:
                return (
                    <>
                        <h1 className="mb-4">Użytkownik</h1>
                        <UserAccountForm click={data => {
                            props.createUser(data);
                            setView(authenticationUserView.AccountCreatedInfo);
                            const setUserInfoView = debounce(() => setView(authenticationUserView.CreateUserInfoView), 3000);
                            setUserInfoView();
                        }}>
                            <Button className="btn btn-primary rounded-pill" type="submit">Stworz uzytkownika</Button>
                        </UserAccountForm>
                    </>
                );
            case authenticationUserView.AccountCreatedInfo:
                return (
                    <>
                        <h1 className="mb-4">User created Seccesfully</h1>
                    </>
                );
        }
    };


   return(
       <div className="authentication-panel-container container-fluid">
            <div className="row d-flex authentication-panel">
                <div className="col authentication-panel authentication-panel__login-column--left">
                    <div className="w-75 d-flex justify-content-center flex-column">
                        <h1 className="mb-4">Logowanie</h1>
                        <div className="mb-4">
                            <input className="form-control" aria-describedby="emailHelp" placeholder="login/email"
                                   onChange={(event) => setLogin(event.target.value)} value={login}/>
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-control" placeholder="Password"
                                   onChange={(event) => setPassword(event.target.value)} value={password}/>
                        </div>
                        <Button type="submit" className="btn btn-primary rounded-pill" onClick={() => {
                            props.loginUser({login, password})
                        }} >Zaloguj</Button>
                    </div>
                </div>
                <div className="col authentication-panel authentication-panel__login-column--right d-flex justify-content-center flex-column">
                    {renderRightPanelView()}
                </div>
            </div>
       </div>
   )
 };

 export default AuthenticationPanel;