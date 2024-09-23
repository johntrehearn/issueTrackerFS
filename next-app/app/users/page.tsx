import React from 'react'


// Interface we declare the shape of the user object
// where we declare the user constant we annotate it with the User interface / i.e. the type of the user object. i.e. in the user case it is User array
interface User {
    id: number;
    name: string;
    email: string;
}

const UserPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: "no-store" });
    const users: User[] = await res.json();

    return (
        <>
            <h1>Users</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (<tr key={user.id}>
                        <th>{user.name}</th>
                        <th>{user.email}</th>
                    </tr>
                    ))}
                </tbody>

            </table>
        </>
    )
}

export default UserPage