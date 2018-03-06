import React from 'react';
import ReactDOM from 'react-dom';
import Layout from "./pages/Layout";
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import '../scss/style.scss'
import '../redux/appStore';
import appStore from '../redux/appStore';
// loads the Icon plugin
UIkit.use(Icons);

const app = document.getElementById('app');

ReactDOM.render(
    <HashRouter>
        <Provider store={appStore}>
            <Layout />
        </Provider>
    </HashRouter>, app);