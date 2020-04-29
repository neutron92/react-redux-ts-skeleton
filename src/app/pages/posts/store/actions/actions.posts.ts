import { action } from 'typesafe-actions';
import { IPostRaw, PostsActionTypes } from '../types';
export const fetchPosts = () => {
    return action(PostsActionTypes.FETCH_POSTS, [], {
        method: 'get',
        route: '/posts',
    });
};
export const fetchPostsSuccess = (data: IPostRaw[]) => {
    return action(PostsActionTypes.FETCH_POSTS_SUCCESS, data);
};
export const fetchPostsError = (message: string) =>
    action(PostsActionTypes.FETCH_POSTS_ERROR, message);
