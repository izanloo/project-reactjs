import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

export default function Tablee({rows,columns}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  function defaultLabelDisplayedRows({ from, to, count }) {
    return `${from}–${to} از ${count !== -1 ? count : `more than ${to}`} `; 
  }
  return (
    <Paper sx={{ 
      width: '80%', 
      overflow: 'hidden',
      display:'flex' ,
      flexDirection: 'column',
      justifyContent:'center',
      margin:'auto'
     }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
              {React.Children.toArray(columns.map((column) => (
                <TableCell
                  align={column.align}
                  style={{backgroundColor:'black',color:'white', minWidth: column.minWidth, fontSize: column.fontSize }}
                >
                  {column.label}
                </TableCell>
              )))}
            </TableRow>
          </TableHead>
          <TableBody >
            {React.Children.toArray(rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              }))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className='class'
        rowsPerPageOptions={[3, 6, 12 ]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        labelDisplayedRows={defaultLabelDisplayedRows}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
 