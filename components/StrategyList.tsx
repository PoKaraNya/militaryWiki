'use client'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import strategyList from '@/mock/strategyList.json'
import '@/styles/Strategy/Strategy.scss'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { IStrategy } from '@/types/types'
import { StrategyListVirtualized } from '@/components/StrategyListVirtualized'

interface IProps {}

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
      <div className="strategy-list__list">
        <StrategyListVirtualized filteredItems={filteredItems} />
      </div>
    </div>
  )
}
