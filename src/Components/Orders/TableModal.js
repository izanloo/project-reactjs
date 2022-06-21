import { useState,useMemo } from "react";
import {
  Box,
  CircularProgress,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  } from "@mui/material";

import {Link} from 'react-router-dom'

const TableOrderModal = (props) => {
    const data=props.data
  const product=props.product

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        marginInline: 1,
        m: 2,
        direction: "rtl",
        fontFamily: " IRANSans-web",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{ direction: "rtl", textAlign: "center" }}
      >
        <Table
          sx={{ minWidth: 100, minHeight: 100 }}
          size="large"
          aria-label="a dense table"
        >
          <TableHead sx={{backgroundColor: 'black'}}>
            <TableRow>
              <TableCell
                sx={{ fontFamily: " IRANSans-web", textAlign: "center" ,color:'white' }}
              >
                نام محصول
              </TableCell>
              <TableCell
                sx={{ fontFamily: " IRANSans-web", textAlign: "center" ,color:'white'}}
              >
                قیمت
              </TableCell>
              <TableCell
                sx={{ fontFamily: " IRANSans-web", textAlign: "center" ,color:'white' }}
              >
                تعداد
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ position: "relative"}}>
            <>
              {data.orderItems.map((record) => (
                
                <TableRow key={record.id}>
                  <TableCell
                    sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
                  >
                    <Link to={`/Detail/${record.id}`}>
                      {product.find((item) => item.id == record.id).name}
                      </Link>
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
                  >
                    {product.find((item) => item.id == record.id).price}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
                  >
                    {record.valueInput}
                  </TableCell>
                </TableRow>
              ))}
            </>
          </TableBody>
        </Table>
      </TableContainer>

      {/* <Pagination
        variant="outlined"
        defaultPage={1}
        page={activePage}
        count={Math.cei
l(data?.headers["x-total-count"] / limit)}
        onChange={(_, page) => {
          console.log("page:", page);
          setActivePage(page);
        }} */}
      {/* /> */}
    </Box>
  );
};

export default TableOrderModal;

