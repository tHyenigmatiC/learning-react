import { useState, useEffect, useReducer } from 'react';

const INITIAL_STATE = {
    user: null,
    searchQuery: 'Bret'
}


const reducer = (state, action) => {
    switch( action.type ){
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            };
        case 'SET_SEARCH_QUERY':
            return{
                ...state,
                searchQuery: action.payload
            }
        default:
            return state;
    }
}

// action creators
const setUser = user => ({
    type: 'SET_USER',
    payload: user
});

const setSearchQuery = query => ({
    type: 'SET_SEARCH_QUERY',
    payload: query
});

const UseReducerExample = url => {

    // similar concept as with-data hoc
    const [ state, dispatch ] = useReducer( reducer, INITIAL_STATE);
    const { user, searchQuery } = state;

    useEffect( () => {
        if ( searchQuery.length > 0 ) {
            const fetchData = async () => {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
                );
                const dataArray = await res.json();
                dispatch(setUser(dataArray[0]));
            }

            fetchData();
        }
    }, [searchQuery]);


    const handleChange = e => {
        dispatch(setSearchQuery(e.target.value));
    }

    return (
        <div className='flex flex-col items-center justify-center p-4 bg-blue-100 rounded h-96 w-96'>
            <p className='my-4 text-xl font-semibold'> useReducer Example</p>
            <input 
                className='p-4 my-4' 
                type='search' 
                onChange={handleChange} 
                value={searchQuery} 
                placeholder='Search Users'
            />
            {
                user ? (
                    <div className='my-4'>
                        <h3 className='mb-2 text-xl font-bold capitalize'>{user.name}</h3>
                        <h3 className='mb-2 text-base capitalize'>{user.username}</h3>
                        <h3 className='mb-2 text-base'>{user.email}</h3>
                    </div>
                ) : (
                    <p>User not found</p>
                )
            }
        </div>
    );
}

export default UseReducerExample;