import React from 'react';
import Post from './Post';

const PostList = ({ posts, twoColumns }) => {
    return (
        <div
            className={`row row-cols-1 row-cols-md-2  ${
                twoColumns ? 'row-cols-lg-2' : 'row-cols-lg-3'
            }`}
        >
            {posts.map((post) => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    );
};

export default PostList;
