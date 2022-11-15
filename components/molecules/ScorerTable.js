/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import Image from 'next/image'
import { matchSorter } from 'match-sorter'
import { useFilters, useGlobalFilter, useTable } from 'react-table'
const columns = []

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  const firstPageRows = rows.slice(0, 10)

  return (
    <>
      <center>
        <table {...getTableProps()} className="mt-14 w-full font-light lg:w-2/3">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="border ">
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {firstPageRows.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} className="border ">
                  {row.cells.map((cell) => {
                    return (
                      <td className="border p-2" {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <br />
      </center>
    </>
  )
}

export default Table
