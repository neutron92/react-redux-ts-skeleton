import { all, fork } from 'redux-saga/effects';
import postsStateSaga from '../pages/posts/store/sagas';

function* rootSaga() {
    yield all([fork(postsStateSaga)]);
}

export default rootSaga;
