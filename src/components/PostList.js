import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import Post from './Post';

const PostList = ({ posts, twoColumns }) => {
    const rowOne = [];
    const rowTwo = [];
    const rowThree = [];

    for (let i = 0; i < posts.length; i += twoColumns ? 2 : 3) {
        rowOne.push(posts[i]);
        rowTwo.push(posts[i + 1]);
        if (!twoColumns) {
            rowThree.push(posts[i + 2]);
        }
    }
    useEffect(() => {
        if (typeof twttr.widgets !== 'undefined') {
            twttr.widgets.load();
        }
    }, []);
    return (
        <div
            className={`row row-cols-1   ${
                twoColumns ? 'row-cols-lg-2' : 'row-cols-lg-3'
            }`}
        >
            {posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
            {/*      <div>
                {rowOne.map((post, i) => (
                    <Post post={post} i={i} key={post.id} />
                ))}
            </div>
            <div>
                {rowTwo.map((post, i) => (
                    <Post post={post} i={i} key={post.id} />
                ))}
            </div>
            {!twoColumns && (
                <div>
                    {rowThree.map((post, i) => (
                        <Post post={post} i={i} key={post.id} />
                    ))}
                </div>
            )} */}
        </div>
    );
};

export default PostList;
