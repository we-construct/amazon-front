import styled  from 'styled-components'
import {Link, useHistory} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addAddressRequest, addAddressSuccess, getAddressRequest, getAddressSuccess} from "../../store/address/action";
import {loginRequest} from "../../store/auth/action";
import address from "../../store/address/reducer";

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
    const { userData } = useSelector((state) => state.auth)
    const { isAddAddressSuccess,myAddresses } = useSelector((state) => state.address)


    const [address, setAddress] = useState('');
    const addAddress = () => {
        if (address) {

            dispatch(addAddressRequest({address: address}))
        }
        setAddress('')
    }
    useEffect(() => {
        if (isAddAddressSuccess){
            dispatch(getAddressRequest())
        }
    },[isAddAddressSuccess])

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
                            <button onClick={addAddress}  type="submit">add address &nbsp;&nbsp;&nbsp;

                            </button>
                        </div>
                    </InputsContainer>
                </div>
            </div>
        </Container>
    )

}
export default MyPage