import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import AddEditProductModal from './AddEditProductModal';
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

  useEffect(() => {
    if (isLoginSuccess && !isLogoutSuccess) {
      history.push('/my-page');
    }
  }, [isLoginSuccess, isLogoutSuccess]);
  return (
    <>
      Shop
      {openShopModal && (
        <AddEditProductModal
          setOpenShopModal={setOpenShopModal}
          modalHeader={'New'}
        />
      )}
      <ButtonAddProduct onClick={() => setOpenShopModal(true)}>
        Add Product
      </ButtonAddProduct>
    </>
  );
};
export default Shop;
