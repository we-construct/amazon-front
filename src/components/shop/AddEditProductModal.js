import styled, { css } from 'styled-components';
import useComponentVisible from '../../utils/clickOutside';
import { SketchPicker } from 'react-color';
import { useEffect, useRef, useState } from 'react';
import {
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
const ModalContainer = styled.div`
  width: 60%;
  height: 600px;
  border: 1px salmon dotted;
  position: absolute;
  z-index: 4;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const InfoContainer = styled.div`
  width: 160px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: palevioletred;
`;
const Container = styled.div`
  justify-content: space-around;
  width: 100%;
  height: 80%;
  display: flex;
`;
const ColorWrapper = styled.div`
  color: ${(props) => props.color};
`;
const sizes = [
  {
    value: 'S',
    label: 'Small',
  },
  {
    value: 'M',
    label: 'Medium',
  },
  {
    value: 'L',
    label: 'Large',
  },
  {
    value: 'XL',
    label: 'Extra Large',
  },
];
const AddEditProductModal = ({ modalHeader }) => {
  const { ref, isComponentVisible } = useComponentVisible(true);
  const [productData, setProductData] = useState({ size: sizes[0].value });
  const [productDataColors, setProductDataColors] = useState([]);
  const [productDataImages, setProductDataImages] = useState({});
  const [color, setColor] = useState('');
  const handleChange = (e) => {
    setProductData({ ...productData, size: e.target.value });
  };
  const handleKey = (e) => {
    if (e.code === 'Enter' || e.code === 'Comma') {
      setProductDataColors([...productDataColors, color]);
      setColor('');
      console.log(productDataColors);
    }
  };
  return (
    <ModalContainer ref={ref}>
      {' '}
      {modalHeader}
      <Container>
        <div>
          Product colors
          <InfoContainer>
            {productDataColors.map((item) => (
              <ColorWrapper color={item}>{item}</ColorWrapper>
            ))}
          </InfoContainer>
        </div>

        <InfoContainer>
          <TextField
            value={productData.name}
            label="Product name"
            variant="standard"
            onChange={(e) =>
              setProductData({ ...productData, name: e.target.value })
            }
          />
          <TextField
            value={productData.description}
            label="Product description"
            variant="standard"
            onChange={(e) =>
              setProductData({ ...productData, description: e.target.value })
            }
          />
          <TextField
            value={productData.brand}
            label="Product brand"
            variant="standard"
            onChange={(e) =>
              setProductData({ ...productData, brand: e.target.value })
            }
          />
          <TextField
            value={productData.price}
            label="Product price"
            variant="standard"
            onChange={(e) =>
              setProductData({ ...productData, price: e.target.value })
            }
          />
          <Select
            value={productData.size}
            label="Size"
            onChange={(e) => handleChange(e)}
          >
            {sizes.map((option) => (
              <MenuItem value={option.value}>{option.label}</MenuItem>
            ))}
          </Select>
          <TextField
            value={productData.category}
            label="Product category"
            variant="standard"
            onChange={(e) =>
              setProductData({ ...productData, category: e.target.value })
            }
          />
          <TextField
            helperText="hash codes like #fafafa,"
            label="add colors  use comma"
            variant="standard"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            onKeyUp={(e) => {
              handleKey(e);
            }}
          />
          <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden />
          </Button>
        </InfoContainer>
        <InfoContainer>Please choose main image</InfoContainer>
      </Container>
    </ModalContainer>
  );
};
export default AddEditProductModal;
