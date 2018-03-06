import axios from 'axios';
import CONSTANTS from '../../app/constants/constants';


export function getCustomerAccountsData(accountData) {
    return {
        type: CONSTANTS.APP_ACTIONS.ACCOUNTS.GET_ACCOUNTS,
        payload: {
            accounts: accountData
        }
    }
}

// Send event that request has started and is being processed
export function requestStarted() {
    return {
        type: CONSTANTS.APP_ACTIONS.ACCOUNTS.ACCOUNTS_REQUEST_STARTED,
        payload: {
            accounts: [{accountType: 'pending'}]
        }
    }
}

// Error handling for customer login API request
export function requestError() {
    return {
        type: CONSTANTS.APP_ACTIONS.ACCOUNTS.ACCOUNTS_REQUEST_ERROR,
        payload: {
            accounts: []
        }
    }
}

// Request to server to get customer active accounts
export function customerAccountsRequest(customerId) {
    return dispatch => {
        dispatch(requestStarted());
        axios.get(`/api/v1/accounts/${customerId}`).then( response => {
            // Dispatch the success event and store in appStore to be used by Dashboard
            dispatch(getCustomerAccountsData(response.data));
        }).catch(() => {
            dispatch(requestError());
        });
    }
}