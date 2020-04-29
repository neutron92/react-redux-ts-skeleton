import { action } from 'typesafe-actions';
import { IPostRaw, PostActionTypes } from '../types';
export const getPost = (id: any) => {
    return action(PostActionTypes.GET_POST, [], {
        method: 'get',
        route: '/posts/' + id,
    });
};
export const getPostSuccess = (data: IPostRaw) => {
    return action(PostActionTypes.GET_POST_SUCCESS, data);
};
export const getPostError = (message: string) => action(PostActionTypes.GET_POST_ERROR, message);
