import { useState } from 'react';
import {dequal} from 'dequal';

import { useUser } from "../context/user-context";
import updateUser from "../services/updateUser";


const UserSettings = () => {
    const [{ user, status, error }, userDispatch] = useUser();

    const isPending = status === 'pending';
    const isRejected = status === 'rejected';

    const [formState, setFormState] = useState(user);

    const isChanged = !dequal(user, formState);

    const handleOnChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(userDispatch, user, formState);
    }

    const handleResetClick = () => {
        setFormState(user);
        userDispatch({type: 'reset'});
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col text-white'>
            <label htmlFor='name'>Name</label>
            <input 
                id='name'
                name='name'
                value={formState.name}
                disabled
                readOnly
                className='p-2 mb-4 font-semibold'
            />
            <label htmlFor='address'>Address</label>
            <input 
                id='address'
                name='address'
                type='text'
                value={formState.address}
                onChange={handleOnChange}
                className='text-black p-2 mb-4'
            />
            <label htmlFor='email'>Email</label>
            <input 
                id='email'
                name='email'
                value={formState.email}
                onChange={handleOnChange}
                className='text-black p-2 mb-4'
            />
            {
                error ? <pre>{error.message}</pre> : null
            }
            <div className='flex justify-evenly my-4'>
                <button 
                    type='button'
                    disabled={!isChanged || isPending}
                    onClick={handleResetClick}
                    className='px-8 py-4 mx-6 w-44 bg-pink-700 shadow-xl rounded text-xl cursor-pointer'
                >
                    Reset
                </button>
                <button 
                    type='submit'
                    disabled={(!isChanged && !isRejected) || isPending}
                    className='px-8 py-4 mx-6 w-44 bg-orange-500 shadow-xl rounded text-xl cursor-pointer'
                >
                    {
                        isPending ? '...' :
                        isRejected ? '✖ Try again' :
                        isChanged ? 'Submit' :
                        '✔'
                    }
                </button>
            </div>
        </form>
    )
}

export default UserSettings;