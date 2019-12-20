import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import {setCurrentUser} from './actions/authAction'

const store = configureStore()

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken)

    const decoded = jwt_decode(localStorage.jwtToken)
    store.dispatch(setCurrentUser(decoded))
}

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider> 
)

ReactDOM.render(jsx, document.getElementById('root'));

serviceWorker.unregister();
