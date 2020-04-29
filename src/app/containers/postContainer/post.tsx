import React, { useEffect } from 'react';
import { IDispatchToPropsPost, IPostState } from '../../pages/posts/store/types';
import Post from '../../components/post/post';
import { useParams } from 'react-router';

type AllProps = IPostState & IDispatchToPropsPost;

const PostContainer: React.FC<AllProps> = ({ data, getPost }: AllProps) => {
    const { id } = useParams();
    useEffect(() => {
        getPost(id);
    }, [getPost, id]);

    return (
        <div>
            <Post key={data.id} title={data.title} />
        </div>
    );
};

export default PostContainer;
