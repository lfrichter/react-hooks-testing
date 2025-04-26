import { useState, useEffect } from 'react'

export const useFetch = (url, method = 'get') => {

  const [response, setResponse] = useState({
        data: null,
        error: null,
        loading: true
  })

  useEffect(() => {
    fetch(url, { method })
      .then(resp => resp.json())
      .then(json =>
        setResponse({
          data: json,
          error: null,
          loading: false
        })
      )
      .catch(error =>
        setResponse({
          data: null,
          error: error,
          loading: false
        })
      )
  }, [url, method])

  return response
}


