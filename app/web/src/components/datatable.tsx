import React from 'react'
import DataTable from 'react-data-table-component'

export default ({ title, column, data ,sort}) => {
  return (
    <DataTable
      title={title}
      columns={column}
      data={data}
      pagination
    />
  )
}
