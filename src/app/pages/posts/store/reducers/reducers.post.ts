import { Action, PayloadAction, TypeConstant } from 'typesafe-actions';
import { IPostRaw, IPostState, PostActionTypes } from '../types';
export const initialStatePost: IPostState = {
    data: {
        id: 0,
        title: '',
        body: '',
        userId: 0,
    },
    errors: [],
    loading: false,
};
export const postReducer = (
    state: IPostState = initialStatePost,
    action: Action<TypeConstant> & PayloadAction<TypeConstant, IPostRaw>,
): IPostState => {
    switch (action.type) {
        case PostActionTypes.GET_POST: {
            return { ...state, loading: true };
        }
        case PostActionTypes.GET_POST_SUCCESS: {
            return { ...initialStatePost, data: action.payload };
        }
        case PostActionTypes.GET_POST_ERROR: {
            return {
                ...state,
            };
        }
        default:
            return state;
    }
};
