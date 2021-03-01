import { useEffect, useState } from 'react'

function Users({ users }) {
  return (
    <ul>
      {
        users.map(u => {
          return (
            <li key={u.id}>{u.name}</li>
          )
        })
      }
    </ul>
  )
}

export default Users