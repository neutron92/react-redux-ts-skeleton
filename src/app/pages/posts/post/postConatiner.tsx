import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../store/actions';
import { IPostState } from '../store/types';
import PostContainer from '../../../containers/postContainer/post';

const PostPageContainer = () => {
    const dispatch = useDispatch();

    const stateToProps: IPostState = useSelector(({ state }: any) => ({
        loading: state.post.loading,
        errors: state.post.errors,
        data: state.post.data,
    }));
    const dispatchToProps = {
        getPost: useCallback((id: any) => dispatch(getPost(id)), [dispatch]),
    };

    return <PostContainer {...stateToProps} {...dispatchToProps} />;
};

export default PostPageContainer;
