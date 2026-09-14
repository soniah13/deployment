import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axios_PostManager() {
    const [users, setUsers] = useState([])
    const[loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            setUsers(response.data);
            setLoading(false)
        })
        .catch((error)=> {
            setError(error.message)
            setLoading(false)
        })
    }, [])
    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error: {error}</p>
    }

    const addUser = () => {
        const newUser = {
            name: "Mary Jane",
            username: "Janem",
            email: "MaryJane123@gmail.com"
        }
        axios.post("https://jsonplaceholder.typicode.com/users", newUser)
        .then((response) => {
            const createdUser = response.data;
            setUsers((prevUsers) =>[ 
                createdUser, ...prevUsers,
            ]);
        })
        .catch((error) => {
            setError(error.message)
        })
    }
    const updateUser = (id) => {
        const updatedUser = {
            name: "John Kamau", 
            username: "JohnK",
            email: "JohnK@gmail.com"
        }
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedUser
            
        )
        .then((response) => {
            const updatedUser = response.data
            setUsers((prevUsers) => 
            prevUsers.map((user) => 
            user.id === id ? updatedUser: user))
        })
        .catch((error) => {
            setError(error.message)
        })
    }

    const deleteUser = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(() => {
            setUsers((prevUsers) => 
        prevUsers.filter((user) => user.id !== id )
        );
        })
        .catch((error) => {
            setError(error.message)
        })
    }
  return (
    <>
    <div>
        <h1>Users Management system</h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <h2><strong>{user.name}</strong></h2>
                    <p>{user.email}</p>
                    <button onClick={() => updateUser(user.id)}> <strong>Edit User</strong></button>
                    <button onClick={() => deleteUser(user.id)}> <strong>Delete User</strong></button>
                </li>
            ))}
        </ul>
        <button onClick={addUser}> Add new User</button>
    </div>
    </>
  )
}

export default Axios_PostManager