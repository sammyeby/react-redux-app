import React from 'react';
import { connect } from 'react-redux';
import '../../scss/pages/dashboard.scss';
import AccountWidget from "../components/AccountWidget/AccountWidget";
import { customerAccountsRequest } from "../../redux/actions/accounts-actions";


class Dashboard extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.customer.noExists) {
            this.redirectToLogin();
            return;
        }
        // Check if customer accounts have already been loaded.
        // If yes, then no need to request for the data again since we already have the data in the store
        if (this.props.accounts[0].accountType && this.props.accounts[0].accountType !== 'none') {
            return;
        }
        this.props.onCustomerAccountsRequest(this.props.customer.customerId)
    }

    // Data won't be loaded when page is reloaded because the functionality wasn't included in the requirement
    // So we redirect customers back to login page
    redirectToLogin() {
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="content-outer full-height">
                <div className="content-inner">
                    <div className="dashboard">
                        <div className="dashboard__title">
                            <div className="dashboard__title__main page-title">
                                {`Welcome ${this.props.customer.title} ${this.props.customer.lastname}`}
                            </div>
                            <div className="dashboard__title__sub">
                                Here are your active accounts overview.
                            </div>
                        </div>
                        <div className="dashboard__body">
                            {this.props.accounts.map((acc, i) => {
                                return <AccountWidget key={i}
                                                      accountType={`${acc.accountType} account`}
                                                      prevBal={acc.prevBal}
                                                      currentBal={acc.currentBal}
                                                      lastActivity={acc.lastActivity}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Map the state that we need from our appStore to the props of the component for display
const mapStateToProps = state => ({
    accounts: state.accounts,
    customer: state.customer
});

// Map actions that we need to the component props
const mapActionsToProps = {
    onCustomerAccountsRequest: customerAccountsRequest
};

// Connect appStore to component and export
export default connect(mapStateToProps, mapActionsToProps)(Dashboard);