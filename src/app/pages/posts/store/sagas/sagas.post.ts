import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import apiCaller from '../../../../services/apiCaller';
import { getPostError, getPostSuccess } from '../actions';
import { IPostRaw, PostActionTypes } from '../types';
import { IMetaAction } from '..';

/**
 * @desc Business logic of effect.
 */
function* handleFetch(action: IMetaAction): Generator {
    try {
        const res: IPostRaw | any = yield call(apiCaller, action.meta.method, action.meta.route);
        yield put(getPostSuccess(res));
    } catch (err) {
        if (err instanceof Error) {
            yield put(getPostError(err.stack!));
        } else {
            yield put(getPostError('An unknown error occured.'));
        }
    }
}

/**
 * @desc Watches every specified action and runs effect method and passes action args to it
 */
function* watchFetchRequest(): Generator {
    yield takeEvery(PostActionTypes.GET_POST, handleFetch);
}

/**
 * @desc saga init, forks in effects, other sagas
 */
export default function* postSaga() {
    yield all([fork(watchFetchRequest)]);
}
