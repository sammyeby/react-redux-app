import React from 'react';
import { NavLink  } from 'react-router-dom';
import './header.scss';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { location } = this.props;

        const isDashboardActive = location.pathname === '/dashboard' ? 'uk-active': '';
        const isProfileActive = location.pathname === '/profile' ? 'uk-active': '';
        const isTransactionsActive = location.pathname === '/transactions' ? 'uk-active': '';

        // If login page, show header without navigation links
        if (location.pathname === '/login') {
            return (
                <div className="header">
                    <nav className="uk-navbar-container" uk-navbar="true">
                        <div className="uk-navbar-left">
                        <span>
                            <NavLink exact  to="/" className="uk-navbar-item uk-logo" replace={true}>
                                <span className="logo-text">Acme Bank</span>
                            </NavLink>
                        </span>
                        </div>
                    </nav>
                </div>
            );
        }
        // If logged in, show full header with navigation links
        return (
            <div className="header">
                <nav className="uk-navbar-container" uk-navbar="true">
                    <div className="uk-navbar-left">
                        <span>
                            <NavLink exact  to="/dashboard" className="uk-navbar-item uk-logo" replace={true}>
                                <span className="logo-text">Acme Bank</span>
                            </NavLink>
                        </span>
                    </div>
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li className={isDashboardActive}><NavLink  to="/dashboard" activeClassName="uk-active" replace={true}>Dashboard</NavLink ></li>
                            <li className={isTransactionsActive}><NavLink  to="/transactions" activeClassName="uk-active" replace={true}>Transactions</NavLink ></li>
                            <li className={isProfileActive}><NavLink  to="/profile" activeClassName="uk-active" replace={true}>Profile</NavLink ></li>
                            <li><NavLink  to="/login" activeClassName="uk-active" replace={true}><span className="logout-btn">Logout</span></NavLink ></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}