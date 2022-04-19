import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getProductRequest, getProductsRequest } from '../../store/shop/action';
import MoreModal from '../Modals/MoreModal';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
const Container = styled.div`
  display: flex;
  height: 600px;
  gap: 20px;
`;
const MyProducts = () => {
  const { myProducts, isGetProductsSuccess, isGetProductSuccess } = useSelector(
    (state) => state.shop
  );
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const toggleModal = (data) => {
    if (data.openModal) {
      setModalData({
        ...modalData,
        parentId: data.parentId,
        productId: data.productId,
      });
      dispatch(getProductRequest(data));
    } else setIsOpen(false);
  };
  const dispatch = useDispatch();
  let data = '';
  useEffect(() => {
    dispatch(getProductsRequest());
  }, []);
  useEffect(() => {
    if (isGetProductSuccess) {
      setIsOpen(true);
    }
  }, [isGetProductSuccess]);
  if (isGetProductsSuccess) {
    data = myProducts[0];
    data = JSON.parse(JSON.stringify(data));
  }
  return (
    <>
      {isGetProductsSuccess && (
        <div>
          {data.map((item, key) => (
            <Container key={key}>
              {item.products.map((val) => (
                <div>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      {val.images.map((image) => (
                        <CardMedia
                          component="img"
                          height="400px"
                          image={'http://127.0.0.1:8000/images/' + image.image}
                          alt={image.image}
                        />
                      ))}

                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Name: {val.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Description: {val.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Category: {val.category}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Price: {val.price}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        onClick={() =>
                          toggleModal({
                            openModal: true,
                            parentId: item.id,
                            productId: val.id,
                          })
                        }
                        size="small"
                        color="primary"
                      >
                        More
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              ))}
            </Container>
          ))}
          <MoreModal
            isOpen={isOpen}
            closeModal={toggleModal}
            modalData={modalData}
          />
        </div>
      )}
    </>
  );
};
export default MyProducts;
