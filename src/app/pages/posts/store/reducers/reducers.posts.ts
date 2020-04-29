import { Action, PayloadAction, TypeConstant } from 'typesafe-actions';
import { IPostRaw, IPostsState, PostsActionTypes } from '../types/';
export const initialState: IPostsState = {
    data: [],
    errors: [],
    loading: false,
};
export const postsReducer = (
    state: IPostsState = initialState,
    action: Action<TypeConstant> & PayloadAction<TypeConstant, IPostRaw[]>,
): IPostsState => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS: {
            return { ...state, loading: true };
        }
        case PostsActionTypes.FETCH_POSTS_SUCCESS: {
            return { ...initialState, data: action.payload };
        }
        case PostsActionTypes.FETCH_POSTS_ERROR: {
            return {
                ...state,
            };
        }
        default:
            return state;
    }
};
