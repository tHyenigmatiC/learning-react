
import { useUser } from "../context/user-context";

const User = () => {

    const [{user}] = useUser();

    return (
        <div className='p-4 bg-white rounded h-min'>
            <pre>{JSON.stringify(user, null , 2)}</pre>
        </div>
    )
}

export default User;