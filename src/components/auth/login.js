import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../store/auth/action';

const Header = styled.h3``;
const Container = styled.div`
  width: 450px;
  height: 350px;
  margin: auto;
  text-align: center;
  color: palevioletred;
  border: 1px dotted black;
`;
const CustomInput = styled.input`
  width: 200px;
  height: 40px;
  text-align: center;
`;
const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Login = () => {
  const dispatch = useDispatch();
  const { isLoginSuccess, isLogoutSuccess } = useSelector(
    (state) => state.auth
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();
  const handleSubmit = (e) => {
    dispatch(loginRequest({ email: email, password: password }));
  };
  useEffect(() => {
    if (isLoginSuccess && !isLogoutSuccess) {
      history.push('/my-page');
    }
  }, [isLoginSuccess, isLogoutSuccess]);
  return (
    <Container>
      <div>
        <Header>Login</Header>
        <div>
          <InputsContainer onSubmit={handleSubmit}>
            <div>
              <CustomInput
                id="inputEmail"
                placeholder="Email address"
                type="text"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <div>
                <CustomInput
                  type="password"
                  id="inputPassword"
                  placeholder="******"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <button onClick={handleSubmit} type="submit">
                Login &nbsp;&nbsp;&nbsp;
              </button>
            </div>
          </InputsContainer>
          <div>
            <Link to={''}>Login Your Account</Link>
            <Link to={'#'}>Forgot Password?</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Login;
