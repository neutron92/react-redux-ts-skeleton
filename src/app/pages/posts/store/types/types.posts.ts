import { IMetaAction } from '..';
import { IPostRaw } from '.';

export interface IPostsState {
    readonly data: IPostRaw[];
    readonly loading: boolean;
    readonly errors: [];
}

export const PostsActionTypes = {
    FETCH_POSTS: '@@post/FETCH_POSTS',
    FETCH_POSTS_SUCCESS: '@@post/FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR: '@@post/FETCH_POSTS_ERROR',
};

export interface IDispatchToProps {
    fetchPosts: () => IMetaAction;
}
