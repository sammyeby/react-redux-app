// Store all strings/constants
const CONSTANTS = {
    APP_ACTIONS: {
        CUSTOMER: {
            CURRENT_CUSTOMER: 'customer:currentCustomer',
            LOGIN_ERROR: 'customer:loginError',
            REQUEST_STARTED: 'customer:requestStarted'
        },
        TRANSACTIONS: {
            GET_TRANSACTIONS: 'transactions:getTransactions',
            TRANSACTIONS_REQUEST_ERROR: 'transactions:requestError',
            TRANSACTIONS_REQUEST_STARTED: 'transactions:requestStarted'
        },
        ACCOUNTS: {
            GET_ACCOUNTS: 'accounts:getAccounts',
            ACCOUNTS_REQUEST_ERROR: 'accounts:requestError',
            ACCOUNTS_REQUEST_STARTED: 'accounts:requestStarted'
        }
    },
    PAGES: {
        PROFILE: {
            FORM_INPUT_LABELS: {
                TITLE: 'Title',
                FIRSTNAME: 'First name',
                LASTNAME: 'Last name',
                AGE: 'Age',
                GENDER: 'Gender',
                ADDRESS: 'Address',
                EMAIL: 'Email',
                PHONE: 'Phone',
                COMPANY: 'Company',
                CUSTOMERID: 'Customer ID'
            }
        }
    }
};

export default CONSTANTS;