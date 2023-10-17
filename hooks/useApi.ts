import { useCallback, useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'

interface IUseApiReturn<T> {
  data: T | null
  loading: boolean
  error: string | null
  refetch: () => void
}

export const useApi = <T>(
  url: string,
  withAutoRefetch: boolean = false,
  refetchTime: number = 20,
): IUseApiReturn<T> => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetch = useCallback(async (): Promise<void> => {
    console.log('fetch')
    setLoading(true)
    try {
      const { data } = await axios.request<T>({
        method: 'GET',
        url,
      })
      setData(data)
      setError(null)
    } catch (e) {
      const { message } = e as AxiosError
      setData(null)
      setError(message)
    } finally {
      setLoading(false)
    }
  }, [url])

  useEffect(() => {
    fetch().then()
    if (withAutoRefetch) {
      const id = setInterval(async () => {
        await fetch()
      }, refetchTime * 1_000)
      return () => clearInterval(id)
    }
  }, [withAutoRefetch, refetchTime, fetch])

  return { data, loading, error, refetch: fetch } as const
}
