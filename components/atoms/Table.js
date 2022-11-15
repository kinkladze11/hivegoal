import React, { useState } from 'react'
import matchSorter from 'match-sorter'
import { useFilters, useGlobalFilter, useTable } from 'react-table'

const columns = []
const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  return (
    <div className="m-auto w-full justify-between  xl:w-2/3">
      <table className="m-auto   w-full  bg-white" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr
              key={i}
              className="border- border-b border-slate-700"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column, j) => (
                <th key={j} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="justify-center" {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <>
                <div className="solorized relative right-auto  justify-center text-center text-white ">
                  {row.original.rank == 1 ? row.original.group : ''}
                </div>
                <tr className="m-auto text-center " {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <>
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      </>
                    )
                  })}
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default Table
