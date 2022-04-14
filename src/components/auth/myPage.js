import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAddressRequest,
  deleteAddressRequest,
  getAddressRequest,
  updateAddressRequest,
} from '../../store/address/action';

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
  gap: 10px;
`;
const AddressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
`;
const IconContainer = styled.span`
  color: ${(props) => (props.submit ? 'green' : 'red')};
  cursor: pointer;
`;

const MyPage = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const {
    isAddAddressSuccess,
    myAddresses,
    isDeleteAddressSuccess,
    isUpdateAddressSuccess,
  } = useSelector((state) => state.address);

  const [address, setAddress] = useState('');
  const addAddress = () => {
    if (address) {
      dispatch(addAddressRequest({ address: address }));
    }
    setAddress('');
  };
  const deleteAddress = (id) => {
    dispatch(deleteAddressRequest(id));
  };

  const handleEdit = (data) => {
    setEditableItemData({ id: data.id, address: data.address });
  };
  const updateAddress = (data) => {
    dispatch(updateAddressRequest(data));
  };
  const [editableItemData, setEditableItemData] = useState({});
  useEffect(() => {
    if (
      isAddAddressSuccess ||
      isDeleteAddressSuccess ||
      isUpdateAddressSuccess
    ) {
      setEditableItemData({});
      dispatch(getAddressRequest());
    }
  }, [isAddAddressSuccess, isDeleteAddressSuccess, isUpdateAddressSuccess]);
  useEffect(() => {
    dispatch(getAddressRequest());
  }, []);
  return (
    <div>
      <Container>
        <div>
          <h3> {userData.name}</h3>
          <h3> {userData.email}</h3>
          <div>
            <InputsContainer>
              <div>
                <div>
                  <CustomInput
                    type="text"
                    id="inputName"
                    placeholder="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <button onClick={addAddress} type="submit">
                  add address &nbsp;&nbsp;&nbsp;
                </button>
              </div>
            </InputsContainer>
          </div>
        </div>
      </Container>

      <div>
        My addresses
        {myAddresses.map((item) => (
          <AddressWrapper>
            {editableItemData.id === item.id ? (
              <>
                <input
                  value={editableItemData.address}
                  type="text"
                  onChange={(e) =>
                    setEditableItemData({
                      id: editableItemData.id,
                      address: e.target.value,
                    })
                  }
                />
                <IconContainer
                  submit
                  onClick={() => updateAddress(editableItemData)}
                >
                  save
                </IconContainer>
                <IconContainer onClick={() => setEditableItemData({})}>
                  cancel
                </IconContainer>
              </>
            ) : (
              <>
                <span onClick={() => handleEdit(item)}> {item.address}</span>
                <IconContainer onClick={() => deleteAddress(item.id)}>
                  delete
                </IconContainer>
              </>
            )}
          </AddressWrapper>
        ))}
      </div>
    </div>
  );
};
export default MyPage;
