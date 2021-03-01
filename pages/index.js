import dynamic from 'next/dynamic'
import style from '../styles/home.module.css'

const Posts = dynamic(
  () => import('../components/home/Posts'),
  { loading: () => <p>Loading Posts ...</p> }
)

export default function Home({ data }) {
  return (
    <div className={style.container}>
      Posts Page
      <Posts posts={data || []}/>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`)
  const data = await res.json()

  return { props: { data } }
}
