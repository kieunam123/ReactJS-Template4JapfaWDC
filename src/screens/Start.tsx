import React from 'react'
import Button from '@mui/material/Button';
import { DataGridPro, GridRow, GridColumnHeaders } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';

const MemoizedRow = React.memo(GridRow);
const MemoizedColumnHeaders = React.memo(GridColumnHeaders);


export default function Start() {

  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100000,
    editable: true,
  });

  return (
    <>
      <Typography variant='h4' sx={{ mb: '20px' }}>
        Sales Order
      </Typography>
      <Box sx={{ height: 520, width: '100%' }}>
        <DataGridPro
          {...data}
          loading={data.rows.length === 0}
          rowHeight={38}
          checkboxSelection
          disableRowSelectionOnClick
          components={{
            Row: MemoizedRow,
            ColumnHeaders: MemoizedColumnHeaders,
          }}
        />
      </Box>
    </>

  )
}
