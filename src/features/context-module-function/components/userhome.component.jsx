import { UserProvider } from '../context/user-context';
import UserSettings from './usersettings.component';
import User from './user.component';

export const UserHome = () => (
    <UserProvider>
        <div className='flex flex-col justify-center w-5/6'>
            <p className='text-3xl text-center text-black font-bold uppercase'>Context Module Function</p>
            <div className='flex m-8 flex-row justify-between'>
                <div className='p-8 bg-purple h-min rounded-md shadow-lg'>
                    <UserSettings />
                </div>
                <User />
            </div>
        </div>
        
    </UserProvider>
)