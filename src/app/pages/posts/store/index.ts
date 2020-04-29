import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { Action, MetaAction, PayloadAction, TypeConstant } from 'typesafe-actions';
import postsStateSaga from './sagas/';
import { postsReducer, postReducer } from './reducers/';

export interface IMetaAction extends MetaAction<TypeConstant, IMeta> {}
export interface IReducerAction<TPayload>
    extends Action<TypeConstant>,
        PayloadAction<TypeConstant, TPayload> {}

interface IMeta {
    method: string;
    route: string;
}

export const rootReducer = combineReducers({
    posts: postsReducer,
    post: postReducer,
});

export function* rootSaga() {
    yield all([fork(postsStateSaga)]);
}
