import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  width: 300,
  height: 300,
  backgroundColor: '#fafafafa',
};
const ColorsContainer = styled.div`
  display: flex;
  gap: 15px;
`;
const ConfirmationButtons = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color};
  border: ${(props) => (props.selected ? '1px dotted blue' : '')};
  border-radius: 50%;
  cursor: pointer;
`;
const MoreModal = ({ isOpen, closeModal, modalData }) => {
  const handleClose = () => {
    closeModal({ openModal: false });
  };
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const { product, isGetProductSuccess } = useSelector((state) => state.shop);

  useEffect(() => {
    if (Object.values(product).length) {
      const index = product.products.findIndex(
        (item) => item.id === modalData.productId
      );
      setData(product.products);
      setActiveIndex(index);
    }
  }, [product]);
  return (
    <>
      {isOpen && Object.values(data).length && (
        <div>
          <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Name: {data[activeIndex]?.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Description: {data[activeIndex]?.description}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Color: {data[activeIndex]?.color}
              </Typography>
              <ColorsContainer>
                {data?.map((item, index) => (
                  <>
                    <ConfirmationButtons
                      selected={index === activeIndex}
                      color={item?.color}
                      onClick={() => {
                        setActiveIndex(index);
                      }}
                    />
                  </>
                ))}
              </ColorsContainer>
            </Box>
          </Modal>
        </div>
      )}
    </>
  );
};
export default MoreModal;
