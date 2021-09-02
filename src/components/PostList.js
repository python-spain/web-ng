import React from 'react';
import Post from './Post';

/* 
La prop posts debe ser de type 
        {
            id: number,
            image: string || undefined,
            link: string,
            title: string,
            date: string,
            summary: string,
        }[]
twoColumns: es opcional, y en caso de ser True el listado sería de dos columnas.
*/

const PostList = ({ posts, twoColumns }) => {
    return (
        <div
            className={`row row-cols-1 row-cols-md-2  ${
                twoColumns ? 'row-cols-lg-2' : 'row-cols-lg-3'
            }`}
        >
            {posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    );
};

export default PostList;
