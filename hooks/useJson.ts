import { useEffect, useState } from 'react'

interface IUseApiReturn<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export const useJson = <T>(key: string): IUseApiReturn<T> => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    (async () => {
      try {
        const json = await import(`@/mock/${key}.json`)
        if (!json) {
          throw new Error('No json file found')
        }
        setData(json.default as T)
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message)
        } else {
          setError('Unexpected error')
        }
      }
      setLoading(false)
    })()
  }, [key])

  return { data, loading, error }
}
