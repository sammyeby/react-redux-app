import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Transactions from "./Transactions";
import Header from "../components/Header/Header";

class Layout extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    render() {
        const { match, location, history } = this.props;
        return (
            <div className="layout">
                <div className="content-outer blue">
                    <div className="content-inner">
                        <Header location={this.props.location} />
                    </div>
                </div>
                <Route exact path="/" component={() => <Redirect to="/login" />}/>
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/profile" component={Profile} />
                <Route path="/transactions" component={Transactions} />
            </div>
        );
    }
}

export default withRouter(Layout);