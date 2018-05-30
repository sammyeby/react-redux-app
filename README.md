# React Redux TestApp

## Description
A Customer Portal for an imaginary bank - Acme Bank, using React to render the UI, and a set of APIs to serve mock data

## Requirements
   - A mock log-in page. For simplicity, do not implement any security, authorisation, or authentication. The user should submit only their username and be taken to the Customer Portal.
   - Once in the Customer Portal, each view should have a navigation bar that provides links to Dashboard, Profile, and Transactions.
   - The default view on log-in will be the Dashboard. The Dashboard will display a welcome message and a list of active accounts, showing the current balance for each.
   - The Profile view will display the customer’s personal information (name, email, phone number, address, customer Id, etc.) and provide the user with the option to update the information. (The update will be mocked, so no need to persist the updates past the current session.)
   - The Transactions view will display the transactions (deposits and withdrawals) for a specific account and allow the user to toggle between their accounts.
   - A Node backend server (ExpressJs) that will provide APIs to the frontend. The APIs will serve static, mock data.

## Architecture
The app is divided into two clear parts (folders) -- 'client' and 'server'. This can be easily noticed when one opens the root folder (react-redux-testapp).
### Client
The 'client' folder contains all necessary frontend development stuff and it runs separately on webpack-dev-server (as stipulated in the requirements). It is basically a standalone app on its own which connects to the server (backend) via **Proxy**. The webpack-dev-server runs on port 8080 and sends requests and receives data (via proxy configuration) to and fro the express server which listens on port 3000. As you would guess, both servers are hooked to run concurrently.

### Server
The 'server' folder contains the ExpressJs server script 'server.js' and the mock json data. 
I included a screenshot of the entire folder structure of the app in the as part of the attachments in the email containing this project. 

## App Startup
To start the app, just navigate to the root folder (react-redux-testapp) in your CLI (command line interface) or GitBash and type *npm install*. Wait for the dependencies to finish downloading and afterwards type *npm start*. When both processes are completed, goto 'http://localhost:8080' on your browser to view the app.


**PLEASE NOTE:** *The second script **npm start** will normally take some time (longer than the initial **npm install** which first of all installs server dependencies). The reason is that  the **npm start**, first of all runs **npm install** for the **client** directory (under the hood to install the client dependencies -- they are quite a bunch) and afterwards, it starts both webpack-dev-server and express server. So as soon as you see 'webpack: Compiled successfully' in your CLI (which shouldn't take too long depending on the speed of your internet), you can then open the app in your browser.*


### List of users to login into the app with (case insensitive)
- Klein
- Preston
- Dillon
- Kristen

**PS:** Even though I have made sure that everything works perfectly :D, nevertheless do not hesitate to contact me on *u.samuel@outlook.com* if you run into any issues or have any questions.

Thanks