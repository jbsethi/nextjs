import dynamic from 'next/dynamic'
import style from '../styles/home.module.css'

const UserList = dynamic(
  () => import('../components/users/Users'),
  { loading: () => <p>Loading Users ...</p> }
)

export default function Users({ data }) {
  return (
    <div className={style.container}>
      Users Page
      <UserList users={data || []}/>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()

  return { props: { data } }
}
