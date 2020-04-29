import React, { useEffect } from 'react';
import { IDispatchToProps, IPostRaw, IPostsState } from '../../pages/posts/store/types';
import Post from '../../components/post/post';
import { Link } from 'react-router-dom';

type AllProps = IPostsState & IDispatchToProps;

const PostList: React.FC<AllProps> = ({ data, fetchPosts }: AllProps) => {
    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);
    // tslint:disable-next-line: no-console
    console.log('data', data);

    return (
        <div>
            <ul>
                {data.map((post: IPostRaw) => (
                    <Link to={`/${post.id}`} key={post.id}>
                        <Post title={post.title} />
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
