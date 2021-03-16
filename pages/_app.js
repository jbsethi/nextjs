import Router from "next/router"
import { useState, useEffect } from 'react'
import AppLayout from '../layouts/AppLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const isNavigated = () => {
      setIsLoaded(true)
    }

    Router.events.on("routeChangeStart", isNavigated)
    return () => {
      Router.events.off("routeChangeStart", isNavigated)
    }
  }, [])


  return (
    <AppLayout>
        <Component {...pageProps} isLoaded={isLoaded}/>
    </AppLayout>
  )
}

export default MyApp
