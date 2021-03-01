import Link from 'next/link'
import style from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Link href="/">Posts</Link>
      <Link href="/users">Users</Link>
    </nav>
  )
}

export default Navbar
