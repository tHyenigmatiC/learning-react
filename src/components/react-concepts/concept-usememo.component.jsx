import { useState } from 'react';

const ConceptUseMemo = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John', age: 24 },
        { id: 2, name: 'Doe', age: 26 },
        { id: 3, name: 'Jolly', age: 28 },
        { id: 4, name: 'Doly', age: 27 },
    ]);

    // initial code
    // const [ selectedUser, setSelectedUser ] = useState(null);

    // improvement 1 might have performance issues
    const [selectedIndex, setSelectedIndex] = useState(0);
    // const selectedUser = users.find( user => user.id === selectedUserId);

    // improvement 2 using useMemo
    // dont run this operation every time the component render
    // insted only when users array or selectedUserId changes
    // const selectedUser = useMemo( () => {
    //     return users.find( user => user.id === selectedUserId)
    // }, [users, selectedUserId]);

    // improvement 3
    // discard use of useMemo 
    // unless you actually have thousands of items and VERY computation heavy data
    // in this case useMemo hurts instead of helping.
    // Why ??
    // JS garbage collection is very efficient with creating/discarding variables and 
    // relatively short array lookups, 
    // so in order to gain performance you should avoid useMemo/useCallback stuff.
    const selectedUser = users[selectedIndex];


    function incrementAge(id) {
        setUsers(currUsers => {
            return currUsers.map(user => {
                if (user.id !== id) return user;
                return { ...user, age: user.age + 1 }
            })
        })
    }

    // here when we select the user first and then change the age of the user;
    // that updated value is not rendered as our users and selectedUser 
    // have different instances of same user.
    // the first initial solution would be not to store the user object
    // but store the id of the selected user.
    function selectUser(id) {
        // intial code
        // const user = users.find(user => user.id === id);
        // setSelectedUser(user);

        // improvement 1
        // setSelectUserId(id);

        // improvement 3
        // store index instead of id which will enhance performance
        // while doing lookups in array
        setSelectedIndex(users.findIndex(user => user.id === id));
    }


    return (
        <div className='p-4 bg-blue-100 rounded h-min'>
            <h3 className='text-center text-xl'>
                Selected User: {" "}
                {selectedUser ?
                    `${selectedUser.name} is ${selectedUser.age} years old`
                    : "No user selected"
                }
            </h3>
            <div>
                {users.map(user => (
                    <div
                        key={user.id}
                        className='grid grid-cols-3 gap-8 m-4 items-center'
                    >
                        <p className='text-center'>{user.name} is {user.age} years old</p>
                        <button className='p-4 bg-bermuda hover:bg-slate-500 hover:text-white' onClick={() => incrementAge(user.id)}>Increment</button>
                        <button className='p-4 bg-bermuda hover:bg-slate-500 hover:text-white' onClick={() => selectUser(user.id)}>Choose</button>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default ConceptUseMemo;