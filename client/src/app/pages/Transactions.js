import React from 'react';
import { connect } from 'react-redux';
import '../../scss/pages/transactions.scss';
import TransactionTable from "../components/TransactionTable/TransactionTable";
import { customerAccountsTransactionRequest } from '../../redux/actions/transactions-actions';

class Transactions extends React.Component{
    constructor(props) {
        super(props);

        // Get the first account's id in the accounts list
        this.state = {
            activeAccountId: this.props.accounts.length && this.props.accounts[0].accountId ? this.props.accounts[0].accountId : ''
        };
    }

    // Data won't be loaded when page is reloaded
    // So we redirect customers back to login page
    redirectToLogin() {
        this.props.history.push('/login');
    }

    componentDidMount() {
        // Check if no customer is logged in
        if (this.props.customer.noExists) {
            this.redirectToLogin();
            return;
        }
        // Check if customer accounts transactions have already been loaded.
        // If yes, then no need to request for the data again since we already have the data in the store
        if (!this.props.transactions.accountId) {
            return;
        }
        this.props.onCustomerAccountsTransactionRequest(this.props.customer.customerId);
    }

    // Handles tabbing through the customer's accounts transactions
    selectTabFn(id) {
        this.setState({
            activeAccountId: id
        });
    }

    render() {
        return (
            <div className="content-outer full-height">
                <div className="content-inner">
                    <div className="transactions">
                        <div className="transactions__title page-title">
                            Your transactions per account
                        </div>
                        <div className="transactions__body">
                            <div className="transactions__body__tabs">
                                <ul className="uk-child-width-expand" uk-tab="true">
                                    {this.props.accounts.map((account, index) => {
                                        // Set the first tab active
                                        if (index === 0){
                                            return <li className="uk-active" key={index} onClick={this.selectTabFn.bind(this, account.accountId)}><a href="#">{account.accountType}</a></li>
                                        }
                                        return <li key={index} onClick={this.selectTabFn.bind(this, account.accountId)}><a href="#">{account.accountType}</a></li>
                                    })}
                                </ul>
                            </div>
                            <TransactionTable tableData={(!this.props.transactions.accountId && this.state.activeAccountId) ? this.props.transactions.accountsTransactions[this.state.activeAccountId] : []}/>
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
    transactions: state.transactions,
    customer: state.customer
});

// Map actions that we need to the component props
const mapActionsToProps = {
    onCustomerAccountsTransactionRequest: customerAccountsTransactionRequest
};

// Connect appStore to component and export
export default connect(mapStateToProps, mapActionsToProps)(Transactions);