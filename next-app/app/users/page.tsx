import React from 'react'


// Interface we declare the shape of the user object
// where we declare the user constant we annotate it with the User interface / i.e. the type of the user object. i.e. in the user case it is User array
interface User {
    id: number;
    name: string;
}

const UserPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: "no-store" });
    const users: User[] = await res.json();

    return (
        <>
            <h1>Users</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}

            </ul>
        </>
    )
}

export default UserPage