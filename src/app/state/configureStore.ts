import { applyMiddleware, createStore, Store, compose } from 'redux';
import sagaMiddleware from './middlewares/sagas';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createReducers from './reducers';
import rootSaga from './sagas';

export const hist = createBrowserHistory();

export default function configureStore(initialState: any): Store<any> {
    const middlewares = [applyMiddleware(sagaMiddleware), applyMiddleware(routerMiddleware(hist))]; // Create Store
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(createReducers(hist), initialState, composeEnhancers(...middlewares));

    sagaMiddleware.run(rootSaga);

    return store;
}
