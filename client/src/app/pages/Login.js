import React from 'react';
import '../../scss/pages/login.scss';
import { connect } from 'react-redux';

import { loginCustomerRequest } from '../../redux/actions/customer-actions';

class Login extends React.Component{
    constructor(props) {
        super(props);

        // Flag to know when customers try to login.
        this.loginBtnClick = false;

        this.state = {
            username: '',
            password: 'password'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidUpdate() {
        if (this.loginBtnClick) {
            this._customerLoginFn(this.state.username);
        }
    }

    // Log customer in when their name exist in the server
    _customerLoginFn(customerName) {
        if (this.props.customer.hasOwnProperty('lastname') && this.props.customer.hasOwnProperty('firstname')) {
            if (this.props.customer.lastname === customerName || this.props.customer.firstname === customerName) {
                this.props.history.push('/dashboard');
            }

        }
    }

    // Handles change on input box in login view
    handleInputChange(e) {
        const target = e.target;
        this.setState({
            [target.name]: target.value
        });
    }

    // Handle form submit action
    handleFormSubmit(e) {
        e.preventDefault();
        this.props.onLoginCustomerRequest(this.state.username);
        this.loginBtnClick = true;
    }

    render() {
        return (
            <div className="content-outer full-height">
                <div className="content-inner">
                    <div className="login">
                        <div className="login__content">
                            <div className="login__content__title">
                                <span className="page-title">Login</span>
                            </div>
                            <div className="login__content__form">
                                <form name="loginForm" className="form" onSubmit={this.handleFormSubmit}>
                                    <div className="form__input uk-margin">
                                        <input className="uk-input" name="username" type="text" value={this.state.username} onChange={this.handleInputChange} placeholder="Username"/>
                                        <div className={`error ${this.props.customer === '' ? 'show' : ''}`}>Sorry, incorrect username</div>
                                    </div>
                                    <div className="form__input uk-margin">
                                        <input className="uk-input" name="password" type="password" value={this.state.password} placeholder="Password" disabled/>
                                    </div>
                                    <div className="form__input uk-margin">
                                        <button className="uk-button uk-width-1-1" disabled={this.state.username === ''}>Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

// Map the state that we need from our appStore to the props of the component for display
const mapStateToProps = state => ({
    customer: state.customer
});

// Map actions that we need to the component props
const mapActionsToProps = {
    onLoginCustomerRequest: loginCustomerRequest
};

// Connect appStore to component and export
export default connect(mapStateToProps, mapActionsToProps)(Login);