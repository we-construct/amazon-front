import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import AuthService from '../../services/auth-service';

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
const RegisterButton = styled.button`
  background-color: ${(props) => (props.hasError ? 'grey' : 'white')};
  cursor: ${(props) => (props.hasError ? 'not-allowed' : 'pointer')};
`;
const ConfirmationButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
  place-content: center;
`;
const ConfirmationButtons = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${(props) =>
    props.itemNumber === 0 ? 'red' : props.itemNumber === 1 ? 'green' : 'grey'};
  color: black;
  border: 1px dotted black;
  border-radius: 50%;
  cursor: pointer;
`;
const Register = () => {
  let history = useHistory();
  const [emailSent, setEmailSent] = useState(false);
  const [anyError, setAnyError] = useState(true);
  const [confirmationData, setConfirmationData] = useState('');
  const [userId, setUserId] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [userRegisterData, setUserRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [userRegisterDataHasErrors, setUserRegisterDataHasErrors] = useState({
    nameError: true,
    emailError: true,
    passwordError: true,
  });
  const confirmPassword = (data) => {
    let userData = {
      id: userId,
      payload: {
        code: data,
        email: userEmail,
      },
    };
    AuthService.confirmLogin(userData).then((res) => {
      if (res.data.confirmed) {
        history.push('/');
      } else {
        setEmailSent(false);
      }
    });
  };
  const validateData = (e) => {
    setUserRegisterDataHasErrors({
      ...userRegisterDataHasErrors,
      [`${e.property}Error`]: !e.event,
    });
    setUserRegisterData({ ...userRegisterData, [e.property]: e.event });
  };
  const handleSubmit = (e) => {
    AuthService.registerUser({
      name: userRegisterData.name,
      email: userRegisterData.email,
      password: userRegisterData.password,
    })
      .then((res) => {
        setConfirmationData(res.data.confirmationCodes);
        setUserId(res.data.user.id);
        setUserEmail(res.data.user.email);
        setEmailSent(true);
      })
      .catch((err) => {
        setErrorMessage('Something went wrong please check your E-Mail');
      });
  };
  useEffect(() => {
    setAnyError(
      userRegisterDataHasErrors.emailError ||
        userRegisterDataHasErrors.nameError ||
        userRegisterDataHasErrors.passwordError
    );
  }, [userRegisterDataHasErrors]);
  return (
    <Container>
      {emailSent ? (
        <div>
          <div>Please check your email and select one of this numbers</div>
          <ConfirmationButtonsContainer>
            {confirmationData.map((number, index) => (
              <ConfirmationButtons
                itemNumber={index}
                onClick={() => confirmPassword(number)}
              >
                {number}
              </ConfirmationButtons>
            ))}
          </ConfirmationButtonsContainer>
        </div>
      ) : (
        <div>
          {errorMessage ? (
            <Header>{errorMessage}</Header>
          ) : (
            <Header>Register</Header>
          )}
          <div>
            <InputsContainer onSubmit={handleSubmit}>
              <div>
                <div>
                  <CustomInput
                    type="text"
                    id="inputName"
                    placeholder="name"
                    name="name"
                    value={userRegisterData.name}
                    onChange={(e) =>
                      validateData({ event: e.target.value, property: 'name' })
                    }
                    required
                  />
                </div>
              </div>
              <div>
                <CustomInput
                  id="inputEmail"
                  placeholder="Email address"
                  type="text"
                  value={userRegisterData.email}
                  name="email"
                  onChange={(e) =>
                    validateData({ event: e.target.value, property: 'email' })
                  }
                  required
                />
              </div>
              <div>
                <div>
                  <CustomInput
                    type="password"
                    id="inputPassword"
                    placeholder="******"
                    value={userRegisterData.password}
                    name="password"
                    onChange={(e) =>
                      validateData({
                        event: e.target.value,
                        property: 'password',
                      })
                    }
                    required
                  />
                </div>
              </div>

              <div>
                <RegisterButton
                  onClick={!anyError ? handleSubmit : undefined}
                  hasError={anyError}
                  type="submit"
                >
                  Register &nbsp;&nbsp;&nbsp;
                </RegisterButton>
              </div>
            </InputsContainer>
            <div>
              <Link to={''}>Login Your Account</Link>
              <Link to={'#'}>Forgot Password?</Link>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};
export default Register;
