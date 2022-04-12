import React, {useState}  from "react";
import styled  from 'styled-components'
import {Link, useHistory} from 'react-router-dom';

import AuthService from "../services/auth-service"

const Header = styled.h3 ``
const Container = styled.div`
         width: 450px;
         height: 350px;
         margin: auto;
         text-align: center;
         color: palevioletred;
         border: 1px dotted black
             `;
const CustomInput = styled.input`
         width: 200px;
         height: 40px;
         text-align: center;
         `;
const InputsContainer = styled.div `
        display: flex;
        flex-direction: column;
        gap: 15px
        `
const ConfirmationButtonsContainer = styled.div `
        margin-top: 20px;
        display: flex;
        gap: 15px;
        place-content: center;
        `
const ConfirmationButtons = styled.button `
      width: 50px;
      height: 50px;
      background-color:${props => (props.itemNumber === 0 ? 'red' : props.itemNumber === 1 ? 'green':"grey")  };
      color: black;
      border: 1px dotted black;
      border-radius: 50%;
      cursor: pointer;
`
const Register = () => {
    let history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [confirmationData, setConfirmationData] = useState('');
    const [userId, setUserId] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
   const validateRegisterData = (data) => {
       console.log( new Function( data.functionName))
         new Function( data.functionName)(data.event)
       // d(data.event)
   }
   const confirmPassword = (data) => {
       let userData = {
           id: userId,
           payload: {
               code: data,
               email: userEmail,
           }
       }
       AuthService.confirmLogin(userData).then(res => {
           if (res.data.confirmed) {
               history.push('/')
           } else {
               setEmailSent(false)
           }
       })
   }
    const handleSubmit = (e) => {
        AuthService.registerUser({
            name: name,
            email: email,
            password: password
        })
            .then((res) => {
               setConfirmationData(res.data.confirmationCodes)
               setUserId(res.data.user.id)
               setUserEmail(res.data.user.email)
               setEmailSent(true)
        }).catch(err=>{
            // JSON.parse(err.response.data)
            setErrorMessage('Something went wrong please check your E-Mail')
        })
    }
        return (
      <Container>
          {emailSent ? <div>
                  <div>Please check your email and select one of this numbers</div>
                  <ConfirmationButtonsContainer>
              {confirmationData.map((number,index) =>
                  <ConfirmationButtons  itemNumber={index} onClick={() => confirmPassword(number)} >{number}</ConfirmationButtons>
              )}
                  </ConfirmationButtonsContainer>
              </div> :
              <div>
                  {errorMessage ? <Header>{errorMessage}</Header> : <Header>Register</Header>}
                  <div>
                      <InputsContainer onSubmit={handleSubmit}>
                          <div>
                              <div>
                                  <CustomInput type="text" id="inputName"  placeholder="name"  name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
                              </div>
                          </div>
                          <div >
                              <CustomInput id="inputEmail"  placeholder="Email address" type="text" value={email}  name="email" onChange={(e) => setEmail(e.target.value)} required/>
                          </div>
                          <div>
                              <div >
                                  <CustomInput type="password" id="inputPassword" placeholder="******"  value={password} name="password" onChange={(e) => setPassword(e.target.value)} required/>
                              </div>
                          </div>

                          <div>
                              <button onClick={handleSubmit}  type="submit">Register &nbsp;&nbsp;&nbsp;

                              </button>
                          </div>
                      </InputsContainer>
                      <div>
                          <Link to={''}>Login Your Account</Link>
                          <Link to={'#'}>Forgot Password?</Link>
                      </div>
                  </div>
              </div>

          }
      </Container>
        )

}
export default Register