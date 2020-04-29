import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import apiCaller from '../../../../services/apiCaller';
import { fetchPostsError, fetchPostsSuccess } from '../actions';
import { IPostRaw, PostsActionTypes } from '../types';
import { IMetaAction } from '..';

/**
 * @desc Business logic of effect.
 */
function* handleFetch(action: IMetaAction): Generator {
    try {
        const res: IPostRaw[] | any = yield call(apiCaller, action.meta.method, action.meta.route);
        yield put(fetchPostsSuccess(res));
    } catch (err) {
        if (err instanceof Error) {
            yield put(fetchPostsError(err.stack!));
        } else {
            yield put(fetchPostsError('An unknown error occured.'));
        }
    }
}

/**
 * @desc Watches every specified action and runs effect method and passes action args to it
 */
function* watchFetchRequest(): Generator {
    yield takeEvery(PostsActionTypes.FETCH_POSTS, handleFetch);
}

/**
 * @desc saga init, forks in effects, other sagas
 */
export default function* postsSaga() {
    yield all([fork(watchFetchRequest)]);
}
