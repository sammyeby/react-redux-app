import axios from 'axios';
import CONSTANTS from '../../app/constants/constants';

// Update our store with the currently logged in customer
export function updateCurrentCustomer (currentCustomer) {
    return {
        type: CONSTANTS.APP_ACTIONS.CUSTOMER.CURRENT_CUSTOMER,
        payload: {
            customer: currentCustomer
        }
    }
}

// Error handling for customer login API request
export function loginError() {
    return {
        type: CONSTANTS.APP_ACTIONS.CUSTOMER.LOGIN_ERROR,
        payload: {
            customer: ''
        }
    }
}

// Send event that request has started and is being processed
export function requestStarted() {
    return {
        type: CONSTANTS.APP_ACTIONS.CUSTOMER.REQUEST_STARTED,
        payload: {
            customer: 'pending'
        }
    }
}

// Request to server to log customer in
export function loginCustomerRequest(customerName) {
    return dispatch => {
        dispatch(requestStarted());
        axios.get(`/api/v1/customers/${customerName}`).then( response => {
            // Dispatch the success event and store in appStore to be used by Dashboard and Profile views
            dispatch(updateCurrentCustomer(response.data));
        }).catch(() => {
            dispatch(loginError());
        });
    }
}