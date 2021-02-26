import Navbar from '../navbar/Navbar'
import style from './header.module.css'

const Header = () => {
  return (
    <div className={style.header} >
      <div className={style.headerContainer}>
        <div className={style.logo}>
          <h1>Next Js</h1>
          <small>Assignment for next js project</small>
        </div>
        <Navbar />
      </div>
    </div>
  )
}

export default Header
