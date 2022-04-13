import styled  from 'styled-components'
import {Link, useHistory} from 'react-router-dom';
import React, {useState}  from "react";
import {useDispatch, useSelector} from "react-redux";

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
        gap:`

const MyPage = () => {
    const dispatch = useDispatch()
    //get data from store => useSelector
    const { userData } = useSelector((state) => state.auth)
    const [address, setAddress] = useState('');
    const addAddress = () => {
        // address
    }

    return (
        <Container>
            <div>
               <h3> {userData.name}</h3>
               <h3> {userData.email}</h3>
                <div>
                    <InputsContainer>
                        <div>
                            <div>
                                <CustomInput type="text" id="inputName"  placeholder="address"  name="address" value={address} onChange={(e) =>setAddress(e.target.value)} required/>
                            </div>
                        </div>


                        <div>
                            <button onClick={addAddress()}  type="submit">add address &nbsp;&nbsp;&nbsp;

                            </button>
                        </div>
                    </InputsContainer>
                </div>
            </div>
        </Container>
    )

}
export default MyPage