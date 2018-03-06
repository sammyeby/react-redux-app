import CONSTANTS from "../../app/constants/constants";

export default function transactionsReducer(state = {}, { type, payload }) {
    switch (type) {
        case CONSTANTS.APP_ACTIONS.TRANSACTIONS.GET_TRANSACTIONS:
            return payload.transactions;
        case CONSTANTS.APP_ACTIONS.TRANSACTIONS.TRANSACTIONS_REQUEST_ERROR:
            return payload.transactions;
        case CONSTANTS.APP_ACTIONS.TRANSACTIONS.TRANSACTIONS_REQUEST_STARTED:
            return payload.transactions;
        default:
            return state;
    }
}