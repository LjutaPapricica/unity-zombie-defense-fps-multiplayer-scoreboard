import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import authReducer from 'reducers/auth';
import userInfoReducer from 'reducers/userinfo';

const reducers = combineReducers({
    auth: authReducer,
    userInfo: userInfoReducer
});

export const history = createBrowserHistory();
export const store = createStore(
    connectRouter(history)(reducers),
    compose(
        applyMiddleware(
            routerMiddleware(history)
        )
    )
);

export function redirect(path) {
    history.push(path);
}