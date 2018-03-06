import CONSTANTS from '../../app/constants/constants';

export default function accountsReducer(state = [], { type, payload }) {
    switch (type) {
        case CONSTANTS.APP_ACTIONS.ACCOUNTS.GET_ACCOUNTS:
            return payload.accounts;
        case CONSTANTS.APP_ACTIONS.ACCOUNTS.ACCOUNTS_REQUEST_ERROR:
            return payload.accounts;
        case CONSTANTS.APP_ACTIONS.ACCOUNTS.ACCOUNTS_REQUEST_STARTED:
            return payload.accounts;
        default:
            return state;
    }
}