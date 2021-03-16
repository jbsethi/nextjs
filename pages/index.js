import dynamic from 'next/dynamic'
import style from '../styles/home.module.css'

import useFetchRecord from '../hooks/useFetchRecord'

const Posts = dynamic(
  () => import('../components/home/Posts'),
  { loading: () => <p>Loading Posts ...</p> }
)

export default function Home({ result }) {
  const [{ isLoading, data: posts }, refetch] = useFetchRecord('https://jsonplaceholder.typicode.com/posts?userId=1', result.data, result.isLoaded)
  return (
    <div className={style.container}>
      Posts Page
      {
        isLoading ?
        <p>Posts loading ...</p> :
        <Posts posts={posts || []}/>
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
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    responseObj.data = await res.json()
    responseObj.isLoaded = true
  }

  return { props: { result: responseObj } }
}
