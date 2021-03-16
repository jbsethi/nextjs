import dynamic from 'next/dynamic'
import style from '../styles/home.module.css'

import useFetchRecord from '../hooks/useFetchRecord'

const UserList = dynamic(
  () => import('../components/users/Users'),
  { loading: () => <p>Loading Users ...</p> }
)

export default function Users({ result }) {
  const [{ isLoading, data: users }, refetch] = useFetchRecord('https://jsonplaceholder.typicode.com/users', result.data, result.isLoaded)
  return (
    <div className={style.container}>
      Users Page
      {
        isLoading ?
        <p>Users loading ...</p> :
        <UserList users={users || []}/>
      }
    </div>
  )
}

export async function getServerSideProps(context) {
  const responseObj = {
    data: [],
    isLoaded: false
  }

  if ((typeof context.req.headers.referer === 'undefined')) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    responseObj.data = await res.json()
    responseObj.isLoaded = true
  }

  return { props: { result: responseObj } }
}
