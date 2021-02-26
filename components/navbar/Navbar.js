import Link from 'next/link'
import style from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Link href="/">All Blogs</Link>
      <Link href="/blogs">My Blogs</Link>
    </nav>
  )
}

export default Navbar
