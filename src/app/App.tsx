import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import PostListContainer from './pages/posts/PostsList/postListContainer';
import configureStore, { history } from './state/';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import PostPageContainer from './pages/posts/post/postConatiner';

const initialState = (window as any).initialReduxState;
const store = configureStore(initialState);

function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact={true} path="/" component={PostListContainer} />
                    <Route path="/:id" component={PostPageContainer} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;
