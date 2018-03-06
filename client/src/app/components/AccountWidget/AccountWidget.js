import React from 'react';
import './accountWidget.scss';

export default class AccountWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="account-widget">
                <div className="account-widget__header">
                    <div className="account-widget__header__title">{this.props.accountType}</div>
                </div>
                <div className="account-widget__body">
                    <div className="account-widget__table">
                        <div className="account-widget__row">
                            <div className="account-widget__cell">
                                <span className="label">Previous balance:</span>
                            </div>
                            <div className="account-widget__cell">
                                <span className="value">{this.props.prevBal}</span>
                            </div>
                        </div>
                        <div className="account-widget__row">
                            <div className="account-widget__cell">
                                <span className="label">Current balance:</span>
                            </div>
                            <div className="account-widget__cell">
                                <span className="value">{this.props.currentBal}</span>
                            </div>
                        </div>
                        <div className="account-widget__row">
                            <div className="account-widget__cell">
                                <span className="label">Last activity date:</span>
                            </div>
                            <div className="account-widget__cell">
                                <span className="value">{this.props.lastActivity}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}