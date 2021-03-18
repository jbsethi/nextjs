import { useState, useEffect } from 'react'

const getData = async (url) => {
  let data = []
  const res = await fetch(url)
  data = await res.json()
  return data
}

const useFetchRecord = (url, initialData, isLoaded) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  const loadData = async (url) => {
    setIsLoading(true)
    const data = await getData(url)
    setData(data)
    setIsLoading(false)
  }

  useEffect(() => {
    if (initialData.length === 0 && isLoaded === false) {
      loadData(url)
    } else {
      setData(initialData)
      setIsLoading(false)
    }

  }, [url, initialData, isLoaded])


  const refetch = () => {
    loadData(url)
  }


  return [{ isLoading, data }, refetch]
}

export default useFetchRecord
