import React from 'react';

const User = ({ userId }) => {
    const user = null;

    return (
        <div className='p-4 bg-blue-100 rounded h-80 w-80 flex items-center justify-center'>
            {
                user ? (
                    <div>
                        <h3>{user.username}</h3>
                        <p>{user.name}</p>
                    </div>
                ) : (
                    <p>User not found</p>
                )
            }
        </div>
    );
}

export default User;