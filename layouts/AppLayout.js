import Header from '../components/header/Header'

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        { children }
      </div>
    </>
  )
}

export default AppLayout
