import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest } from '../../store/auth/action';

const Container = styled.div`
  width: 100%;
  height: 45px;
  text-align: left;
  color: palevioletred;
  margin: 0 5px 5px 5px;
  padding: 5px;
  display: flex;
  gap: 15px;
  border: 1px dotted black;
`;
const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logoutRequest());
  };
  const { userData } = useSelector((state) => state.auth);
  const { isLogoutSuccess } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isLogoutSuccess) {
      history.push('/login');
    }
  }, [isLogoutSuccess]);
  return (
    <Container>
      {Object.keys(userData).length ? (
        <>
          {' '}
          <Link onClick={logOut}>Logout</Link>
          <Link to={'/shop'}>Shop</Link>
          <Link to={'/my-products'}>My Products</Link>
        </>
      ) : (
        <>
          {' '}
          <Link to={'/login'}>Login</Link>
          <Link to={'/register'}>Register</Link>
        </>
      )}
    </Container>
  );
};
export default Header;
