import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import customerReducer from './reducers/customer-reducer';
import transactionsReducer from './reducers/transactions-reducer';
import accountsReducer from './reducers/accounts-reducer';


// All app's reducers
const allReducers = combineReducers({
    transactions: transactionsReducer,
    customer: customerReducer,
    accounts: accountsReducer
});

// All enhancers for the appStore (including redux chrome devTool extension
const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

// Create redux store with default values
const appStore = createStore(allReducers, {
    accounts: [{accountType: 'none'}],
    customer: {noExists: 'none'},
    transactions: {accountId: 'none'}
}, allStoreEnhancers);

export default appStore;