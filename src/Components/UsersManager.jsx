import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UsersManager() {
    const [users, setUsers] = useState([])
    const[loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchUsers(){
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/users")
                setUsers(response.data);
            } catch(error){
                setError(error.message)
            } finally{
                setLoading(false)
            }
        }
        fetchUsers();
    }, [])
    if(loading) return <p>Loading users...</p>
    if(error) return <p>Error occured :{error} </p>

    const addUser = async() =>{
        const newUser = {
            name: "Mary Jane",
            username: "MJ.ane",
            email: "MaryJ123@gmail.com"
        };
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
            const createdUser = response.data
            setUsers((prevUsers) => [createdUser, ...prevUsers,])
        }catch(error){
            setError(error.message)
        }
    }

    const deleteUser = async (id) => {
        try{
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUsers((prevUser) => 
            prevUser.filter((user) => user.id !== id ))
        } catch(error) {
            setError(error.message)
        }
    }
   return (
    <>
    <h1>User manager System</h1>
    <div>
        <ul>
            {users.map((user) =>(
                <li key={user.id}>
                    <h3><strong>{user.name}</strong></h3>
                    <i><p>{user.email}</p></i>
                    <button onClick={() => deleteUser(user.id)}> Delete User</button>
                </li>
            ))}
            <button onClick={addUser}> Add User</button>
        </ul>
    </div>
    </>
  )
}

export default UsersManager