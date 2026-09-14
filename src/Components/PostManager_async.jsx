import React from 'react'
import { useEffect, useState } from 'react'

function PostManager_async() {
  const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
      const fetchPosts = async () => {
        try{
          const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
          if(!response.ok) {
            throw new Error (
              `Failed to fetch posts, status is ${response.status}`
            )
          }
          const data = await response.json();
          setPosts(data)
        }
        catch(error){
          setError(error.message)
        }
        finally{
          setLoading(false)
        }
      }
      fetchPosts();
    }, [])

    if(error) {
      return <p>Error occured : {error} </p>
    }
    if(loading){
      return <p>Loading....</p>
    }

    const addPost = async() => {
      const newPost = {
        title: "The Boy who harnessed the Rain",
        body: "This story is about a boy who had the ability to......",
        userId: 1
      }
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST", 
          headers: {
            "Content-Type" : "application/json"
          }, 
          body: JSON.stringify(newPost)
        })
        if(!response.ok){
          throw new Error(`Error occured while posting ${response.status}`)
        }
        const createdPost = await response.json();
        setPosts((prevPost) => [createdPost, ...prevPost])
      }
      catch(error){
        setError(error.message)
      }
    }
    const deletePost = async(id) => {
      try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: "DELETE",
        })
        if(!response.ok){
          throw new Error("Failed to delete post", response.status)
        }
        setPosts((prevPosts) =>
        prevPosts.filter((post) => post.id !== id))
      }
      catch(error){
        setError(error.message)
      }
    }
  return (
    <>
    <div>
      <h1>Asycn/Await Post Manager system</h1>
      <button onClick={addPost}> Create new Post</button>
      
        <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3><strong>{post.title}</strong></h3>
            <p>{post.body}</p>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
          
        ))}
      </ul> 
      
      </div>
    </>
  )
}

export default PostManager_async