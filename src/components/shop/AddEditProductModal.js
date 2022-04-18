import styled, { css } from 'styled-components';
import useComponentVisible from '../../utils/clickOutside';
import { SketchPicker } from 'react-color';
import { useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  Chip,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
const ModalContainer = styled.div`
  width: 60%;
  height: 600px;
  background: #fafafa;
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
const AddEditProductModal = ({ modalHeader, addData }) => {
  const { ref, isComponentVisible } = useComponentVisible(true);
  const [productData, setProductData] = useState({
    sizes: [],
    images: [],
    color: '',
  });
  const [productDataColors, setProductDataColors] = useState([]);
  const [productDataSizes, setProductDataSizes] = useState([]);
  const [productDataImages, setProductDataImages] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [color, setColor] = useState('');
  const onImageChange = (e) => {
    let files = e.target.files || e.dataTransfer.files;

    if (!files.length) {
      return;
    }
    setProductImages([...productImages, ...files]);
    createImage(files[0]);
  };
  const addToCollection = () => {
    addData({
      ...productData,
      color,
      sizes: [...productDataSizes],
      images: [...productImages],
    });
  };

  const createImage = (file) => {
    let reader = new FileReader();
    reader.onload = (e) => {
      setProductDataImages([...productDataImages, e.target.result]);
    };
    reader.readAsDataURL(file);
  };
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setProductDataSizes(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const handleKey = (e) => {
    if (e.code === 'Enter' || e.code === 'Comma') {
      setProductDataColors([...productDataColors, color]);
      setColor('');
    }
  };
  return (
    <ModalContainer ref={ref}>
      {' '}
      {modalHeader}
      <Container>
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
          <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={productDataSizes}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {productDataSizes.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
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
          />
          <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden onChange={onImageChange} />
          </Button>
        </InfoContainer>
        <InfoContainer>
          Please choose main image
          {productDataImages.map((image) => (
            <img src={image} alt="" />
          ))}
          <Button
            onClick={addToCollection}
            variant="contained"
            component="label"
          >
            add to collection
          </Button>
        </InfoContainer>
      </Container>
    </ModalContainer>
  );
};
export default AddEditProductModal;
