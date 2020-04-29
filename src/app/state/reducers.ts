import { combineReducers } from 'redux';
import { rootReducer } from '../pages/posts/store';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

const createReducers = (history: History<any>) => {
    return combineReducers({
        state: rootReducer,
        router: connectRouter(history),
    });
};

export default createReducers;
