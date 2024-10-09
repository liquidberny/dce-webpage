'use client'
 
import { useState, useEffect } from 'react'
import {Pet} from '@/app/interfaces'
export default function Posts() {
  const [posts, setPosts] = useState<Pet[] | null>(null)
 
  useEffect(() => {
    async function fetchPosts() {
      let res = await fetch('http://localhost:1337/api/pets')
      let data = await res.json()
      setPosts(data.data)
    }
    fetchPosts()
  }, [])
 
  if (!posts) return <div>Loading...</div>
 
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.Name} - {post.animal} - {post.breed}
        </li>
      ))}
    </ul>
  )
  
}