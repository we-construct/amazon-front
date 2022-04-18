import axiosService from '../axios';
class authService {
  addProduct(payload) {
    return axiosService.post('/shop/add', payload, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
  getProducts() {
    return axiosService.get(`/user-profile/my-address`);
  }
}

export default new authService();
