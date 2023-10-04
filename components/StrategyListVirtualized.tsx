'use client'
import { FC, useRef } from 'react'
import { ListRowProps } from 'react-virtualized/dist/es/List'
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  List,
} from 'react-virtualized'
import { StrategyListItem } from '@/components/StrategyListItem'
import { IStrategy } from '@/types/types'

interface IProps {
  filteredItems: IStrategy[]
}

const StrategyListVirtualized: FC<IProps> = ({ filteredItems }) => {
  const cache = useRef(
    new CellMeasurerCache({
      fixedHeight: true,
      defaultHeight: 50,
    }),
  )

  const rowRenderer = ({ key, index, parent, style }: ListRowProps) => {
    const { id, title } = filteredItems[index]
    return (
      <CellMeasurer
        key={key}
        cache={cache.current}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        <div style={style}>
          <StrategyListItem id={id} title={title} />
        </div>
      </CellMeasurer>
    )
  }

  return (
    <AutoSizer>
      {({ width, height }) => (
        <List
          width={width}
          height={height}
          rowCount={filteredItems.length}
          rowHeight={cache.current.rowHeight}
          deferredMeasurementCache={cache.current}
          rowRenderer={rowRenderer}
        />
      )}
    </AutoSizer>
  )
}
export default StrategyListVirtualized