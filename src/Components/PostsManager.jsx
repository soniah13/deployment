import { create } from 'axios'
import React, { useEffect, useState } from 'react'

function PostsManager() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((response) => {
      if(!response.ok){
        throw new Error("request failed", response.status)
      }
      return response.json()
    })
    .then((data) => {
      setPosts(data);
      setLoading(false)
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false)
    })
  },[])

  if(loading) {
    return <p>Loading...</p>
  }
  if(error) {
    return <p>Error : {error}</p>
  }

  const addPost = () => {
    const newPost = {
      title: "My sunshine",
      body:"From the east from the west.....",
      userId:1,
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(newPost)
    })
    .then((response) => {
      if(!response.ok) {
        throw new Error(`Request Failed, ${response.status}`)
      }
      return response.json()
      
    })
    .then((createdPost) => {
        setPosts((prevPost) => [createdPost, ...prevPost]);
        console.log(createdPost)
      })
      .catch((error) =>{
        setError(error.message)
      });
  }

  const updatePost = (id) => {
    const updatedData = {
      title:"Updated Rising sun",
      body:"The sun lights up the world, the colors maginify the beauty of the earth",
      userId: 1,
    }
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(updatedData),
    })
    .then((response) => {
      if(!response.ok){
        throw new Error(`Request Failed ${response.status}`)
      }
      return response.json()
    })
    .then((updatedPost) =>{
      setPosts((prevPost) => 
        prevPost.map((post) => 
        post.id === id? updatedPost :post
      )
      )
    })
    .catch((error) => {
      setError(error.message)
    })
  }

  const deletePost = (id) =>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/`,{
      method: "DELETE"
    })
    .then((response) => {
      if(!response.ok) {
        throw new Error(`Request Failed ${response.status}`)
      }
      setPosts((prevPost) => prevPost.filter((post) => post.id !== id)
    );
    })
    .catch((error) => {
      setError(error.message)
    })
  }
  return (
    <>
    <div>
      <button onClick={addPost} > Add New Post</button>
      <h1>Post Manager system</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3><strong>{post.title}</strong></h3>
            <p>{post.body}</p>
            <button onClick={() => updatePost(post.id)}>Edit</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
          
        ))}
      </ul> 

    </div>
    
    </>
  )
}

export default PostsManager