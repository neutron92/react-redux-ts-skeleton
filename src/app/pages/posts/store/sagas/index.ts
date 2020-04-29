import { all, fork } from 'redux-saga/effects';

import postSaga from './sagas.post';
import postsSaga from './sagas.posts';

function* postsStateSaga() {
    yield all([fork(postSaga), fork(postsSaga)]);
}

export default postsStateSaga;
