import axiosService from '../axios';
class shopService {
  addProduct(payload) {
    return axiosService.post('/shop/add', payload, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
  getProducts() {
    return axiosService.get(`/shop/get-my-products`);
  }
  getProduct(data) {
    return axiosService.get(
      `/shop/get-product?productId=${data.productId}&parentId=${data.parentId}`
    );
  }
}

export default new shopService();
