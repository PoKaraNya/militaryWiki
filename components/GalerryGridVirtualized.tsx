'use client'
import {
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache,
    Grid,
} from "react-virtualized";
import {FC, useRef} from "react";
import {chunk} from "@/utils/chunk";
import {GridCellProps, GridCellRenderer} from "react-virtualized/dist/es/Grid";
import "@/styles/Galerry/main.scss"

interface IProps {
    data: string[]
}

const GalerryGridVirtualized: FC<IProps> = ({data}) => {
    const NUM_COLUMNS = 3
    const items = chunk(data, NUM_COLUMNS)

    const cache = useRef(
        new CellMeasurerCache({
            fixedHeight: true,
            defaultHeight: 310,
        }),
    )

    const cellRenderer: GridCellRenderer = ({ columnIndex, key, rowIndex, parent, style }: GridCellProps) => {
        const src = items[rowIndex][columnIndex]
        return (
            <CellMeasurer
                key={key}
                cache={cache.current}
                parent={parent}
                columnIndex={columnIndex}
                rowIndex={rowIndex}
            >
                <div className="grid-cell" style={style}>
                    {
                        src
                            ? <img alt="gallerry-image" className="grid-cell" src={src}/>
                            : null
                    }
                </div>
            </CellMeasurer>
        )
    }

    return (
        <AutoSizer>
            {({ width, height }) => (
                <Grid
                    columnCount={NUM_COLUMNS}
                    columnWidth={310}
                    cellRenderer={cellRenderer}
                    width={width}
                    height={height}
                    rowCount={items.length}
                    rowHeight={cache.current.rowHeight}
                    deferredMeasurementCache={cache.current}
                />
            )}
        </AutoSizer>
    )
}
export default GalerryGridVirtualized