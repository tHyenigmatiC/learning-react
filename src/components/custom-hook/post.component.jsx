import React from 'react';

const Post = ({ postId }) => {
    const post = null;
    return (
        <div className='p-4 bg-blue-100 rounded h-80 w-80 flex items-center justify-center'>
            {
                post ? (
                    <div>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ) : (
                    <p>Post not found</p>
                )
            }
        </div>
    );
}

export default Post