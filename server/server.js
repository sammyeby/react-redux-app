const express = require('express');

// Since we are serving static data that won't be changed/updated, it is okay to require the json files
const customersList = require('./mock_data/customerlist.json');
const accountList = require('./mock_data/accountlist.json');
const transactionList = require('./mock_data/transactionlist.json');


const app = express();

// Customers list api endpoint (for login view and profile view) /:customerName
app.use('/api/v1/customers/:customerName', (req, res, next) => {

    const customerNameToCheck = req.params.customerName.toLowerCase();
    const filterCustomer = customersList.data.filter(customer => {
        return (customer.firstname.toLowerCase() === customerNameToCheck) || (customer.lastname.toLowerCase() === customerNameToCheck);
    });
    if (filterCustomer.length) {
        res.send(filterCustomer[0]);
    } else {
        res.sendStatus(404);
    }
});

//Account list overview by customerId endpoint (for Dashboard view)
app.use('/api/v1/accounts/:customerId', (req, res, next) => {

    const customerIdAccToGet = req.params.customerId;
    const customersAccountsData = accountList.data;
    if (customersAccountsData.hasOwnProperty(customerIdAccToGet)) {
        res.send(customersAccountsData[customerIdAccToGet]);
    } else {
        res.sendStatus(404);
    }

});

//Transactions list endpoint by customerId (for transactions view)
app.use('/api/v1/transactions/:customerId', (req, res, next) => {

    const customerIdTransToGet = req.params.customerId;
    const filterTransactionsByCustomerId = transactionList.data.customers.filter((customer) => {
        return customer.customerId === customerIdTransToGet;
    });

    if (filterTransactionsByCustomerId.length) {
        res.send(filterTransactionsByCustomerId[0]);
    } else {
        res.sendStatus(404);
    }
});

app.listen(3000, () => console.log('Kreditech_test server listening on port 3000!'));