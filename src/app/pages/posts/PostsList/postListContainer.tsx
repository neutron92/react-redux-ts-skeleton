import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../../containers/postsContainer/postList';
import { fetchPosts } from '../store/actions';
import { IPostsState } from '../store/types';

const PostListContainer = () => {
    const dispatch = useDispatch();

    const stateToProps: IPostsState = useSelector(({ state }: any) => ({
        loading: state.posts.loading,
        errors: state.posts.errors,
        data: state.posts.data,
    }));

    const dispatchToProps = {
        fetchPosts: useCallback(() => dispatch(fetchPosts()), [dispatch]),
    };

    return <PostList {...stateToProps} {...dispatchToProps} />;
};

export default PostListContainer;
