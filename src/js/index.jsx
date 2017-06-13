import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history'
import store from 'store';

import Page from 'components/page.jsx';
import Homepage from 'components/homepage.jsx';

import { requireAuth, getToken } from 'auth';

import plugins from 'plugins';


const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store);

const pageDOMNode = document.getElementById('root');


const routes = <Provider store={store}>
     <Router history={history}>
        <Route path="/" component={Page} />
    </Router>
</Provider>;


export default () => render(routes, pageDOMNode, plugins);
