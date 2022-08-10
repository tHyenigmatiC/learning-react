import React from 'react';

import useFetch from '../../effects/use-fetch.effect';

const User = ({ userId }) => {

    const user = useFetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`);

    return (
        <div className='flex items-center justify-center p-4 bg-blue-100 rounded h-96 w-96'>
            {
                user ? (
                    <div>
                        <h1 className='mb-2 text-xl font-bold capitalize'>{user.username}</h1>
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