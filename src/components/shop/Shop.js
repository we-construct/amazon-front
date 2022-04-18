import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addProductRequest } from '../../store/shop/action';
import AddEditProductModal from './AddEditProductModal';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
const ButtonAddProduct = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  position: absolute;
  margin-bottom: 25px;
  margin-right: 25px;
  bottom: 0;
  right: 0;
  cursor: pointer;
  background-color: #2fbd30;
  color: white;
  font-size: large;
  line-height: 1.5;
`;
const Shop = () => {
  const dispatch = useDispatch();
  const { isLoginSuccess, isLogoutSuccess } = useSelector(
    (state) => state.auth
  );
  const [openShopModal, setOpenShopModal] = useState(false);
  const [myProductsData, setMyProductsData] = useState([]);
  const addData = (data) => {
    setOpenShopModal(false);
    setMyProductsData([...myProductsData, data]);
  };
  const uploadData = () => {
    let formData = new FormData();

    myProductsData.map((item, index) => {
      const keys = Object.keys(item);
      keys.forEach((key) => {
        if (key === 'sizes' || key === 'images') {
          item[key].forEach((data, idx) => {
            formData.append(`${index}[${key}][${idx}]`, data);
          });
        } else {
          formData.append(`${index}[${key}]`, item[key]);
        }
      });
    });

    dispatch(addProductRequest(formData));
  };
  useEffect(() => {
    if (isLoginSuccess && !isLogoutSuccess) {
      history.push('/my-page');
    }
  }, [isLoginSuccess, isLogoutSuccess]);
  return (
    <>
      Shop
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Color</TableCell>
              <TableCell align="right">Sizes</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myProductsData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.color}</TableCell>
                <TableCell align="right">
                  {row.sizes.map((size) => (
                    <>{size}&nbsp;</>
                  ))}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={() => uploadData(true)}
        variant="contained"
        component="label"
      >
        Upload Data
      </Button>
      {openShopModal && (
        <AddEditProductModal addData={addData} modalHeader={'New'} />
      )}
      <ButtonAddProduct onClick={() => setOpenShopModal(true)}>
        Add Product
      </ButtonAddProduct>
    </>
  );
};
export default Shop;
