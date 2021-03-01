import { useEffect, useState } from 'react'

function Posts({ posts }) {
  return (
    <ul>
      {
        posts.map(p => {
          return (
            <li key={p.id}>{p.title}</li>
          )
        })
      }
    </ul>
  )
}

export default Posts