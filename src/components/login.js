import React, {useState}  from "react";
import axios from 'axios';
import styled, { css } from 'styled-components'
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
const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();
    const handleSubmit = (e) => {
        AuthService.login({
            email: email,
            password: password
        })
            .then((res) => {
                history.push('/register')
            })
    }
    return (
        <Container>
            <div>
                <Header>Login</Header>
                <div>
                    <InputsContainer onSubmit={handleSubmit}>
                        <div >
                            <CustomInput id="inputEmail"  placeholder="Email address" type="text" value={email}  name="email" onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div>
                            <div >
                                <CustomInput type="password" id="inputPassword" placeholder="******"  value={password} name="password" onChange={(e) => setPassword(e.target.value)} required/>
                            </div>
                        </div>

                        <div>
                            <button onClick={handleSubmit}  type="submit">Login &nbsp;&nbsp;&nbsp;

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
    )

}
export default Login