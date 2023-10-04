import { useState } from 'react'

export const useCounter = (initial: number) => {
  const [value, setValue] = useState<number>(initial)
  const increment = (): void => {
    setValue((val) => val + 1)
  }

  const reset = (): void => {
    setValue(initial)
  }

  return [value, increment, reset] as const
}
