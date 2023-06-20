import * as React from 'react';

import { request, setAuthHeader } from '../axios_helper';

import WelcomeContent from './WelcomeContent';
import AuthContent from './AuthContent';
import LoginForm from './LoginForm';
import Buttons from './Buttons';

export default class AppContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            componentToShow: "welcome"
        }
    };

    login = () => {
        this.setState({componentToShow: "login"})
    };

    logout = () => {
        this.setState({componentToShow: "welcome"})
        setAuthHeader(null);
    };

    onLogin = (e, email, password) => {
        e.preventDefault();
        request(
            "POST",
            "/login",
            {
                email: email,
                password: password
            }).then(
            (response) => {
                setAuthHeader(response.data.token);
                this.setState({componentToShow: "messages"});
            }).catch(
            (error) => {
                setAuthHeader(null);
                this.setState({componentToShow: "welcome"})
            }
        );
    };

    onRegister = (event, surname, firstname, patronymic, email, password) => {
        event.preventDefault();
        request(
            "POST",
            "/register",
            {
                surname: surname,
                firstname: firstname,
                patronymic: patronymic,
                email: email,
                password: password
            }).then(
            (response) => {
                setAuthHeader(response.data.token);
                this.setState({componentToShow: "messages"});
            }).catch(
            (error) => {
                setAuthHeader(null);
                this.setState({componentToShow: "welcome"})
            }
        );
    };

    
    render () {
        return(
            <>
            <Buttons
              login={this.login}
              logout={this.logout}
            />
    
            {this.state.componentToShow === "welcome" && <WelcomeContent /> }
            {this.state.componentToShow === "login" && <LoginForm onLogin={this.onLogin} onRegister={this.onRegister} />}
            {this.state.componentToShow === "messages" && <AuthContent />}
    
          </>
        );
    };
}