import CONSTANTS from '../../app/constants/constants';
import axios from 'axios';

export function getCustomerAccountsTransactionData(transactionData) {
    return {
        type: CONSTANTS.APP_ACTIONS.TRANSACTIONS.GET_TRANSACTIONS,
        payload: {
            transactions: transactionData
        }
    }
}

export function requestStarted() {
    return {
        type: CONSTANTS.APP_ACTIONS.TRANSACTIONS.TRANSACTIONS_REQUEST_STARTED,
        payload: {
            transactions: {accountId: 'pending'}
        }
    }
}

export function requestError() {
    return {
        type: CONSTANTS.APP_ACTIONS.TRANSACTIONS.TRANSACTIONS_REQUEST_ERROR,
        payload: {
            transactions: {}
        }
    }
}

export function customerAccountsTransactionRequest(customerId) {
    return dispatch => {
        dispatch(requestStarted());
        axios.get(`/api/v1/transactions/${customerId}`).then( response => {
            // Dispatch the success event and store in appStore to be used by Dashboard
            dispatch(getCustomerAccountsTransactionData(response.data));
        }).catch(() => {
            dispatch(requestError());
        });
    }
}