import CONSTANTS from '../../app/constants/constants';

export default function customerReducer(state = {}, { type, payload }) {
    switch (type) {
        case CONSTANTS.APP_ACTIONS.CUSTOMER.CURRENT_CUSTOMER:
            return payload.customer;
        case CONSTANTS.APP_ACTIONS.CUSTOMER.LOGIN_ERROR:
            return payload.customer;
        case CONSTANTS.APP_ACTIONS.CUSTOMER.REQUEST_STARTED:
            return payload.customer;
        default:
            return state;
    }
}