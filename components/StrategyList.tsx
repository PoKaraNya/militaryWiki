'use client'
import {ChangeEvent, FC, lazy, useEffect, useState} from 'react'
import strategyList from '@/mock/strategyList.json'
import '@/styles/Strategy/Strategy.scss'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { IStrategy } from '@/types/types'
import { Suspense } from 'react'
// import { StrategyListVirtualized } from '@/components/StrategyListVirtualized'

interface IProps {}

const StrategyListVirtualizedLazy = lazy(() => import('@/components/StrategyListVirtualized'))

export const StrategyList: FC<IProps> = () => {
  const [search, setSearch] = useState<string>('')
  const [filteredItems, setFilteredItems] = useState<IStrategy[]>(strategyList)

  useEffect(() => {
    if (search === '') {
      setFilteredItems(strategyList)
    } else {
      const newItems = strategyList.filter(({ title }) => {
        return title.toLowerCase().includes(search.toLowerCase())
      })
      setFilteredItems(newItems)
    }
  }, [search])

  const searchHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="strategy-list">
      <Input
        size="large"
        placeholder="Пошук"
        prefix={<SearchOutlined />}
        onChange={searchHandle}
        value={search}
      />
      <Suspense fallback={<p>Loading...</p>}>
        <div className="strategy-list__list">
            <StrategyListVirtualizedLazy filteredItems={filteredItems} />
        </div>
      </Suspense>
    </div>
  )
}
