import React from 'react';
import Post from './Post';

const PostList = ({ posts, threeColumns }) => {
    return (
        <div
            className={`row row-cols-1 row-cols-md-2  ${
                threeColumns ? 'row-cols-lg-3' : 'row-cols-lg-4'
            }`}
        >
            {posts.map((post) => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    );
};

export default PostList;
