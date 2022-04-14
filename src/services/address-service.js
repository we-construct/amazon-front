import axiosService from '../axios';
class authService {
  addAddress(payload) {
    return axiosService.post(`/user-profile/my-address/add`, {
      ...payload,
    });
  }
  getAddresses() {
    return axiosService.get(`/user-profile/my-address`);
  }
  deleteAddresses(payload) {
    return axiosService.delete(`/user-profile/my-address/delete/${payload}`);
  }
  updateAddress(payload) {
    return axiosService.put(`/user-profile/my-address/update/${payload.id}`, {
      address: payload.address,
    });
  }
}

export default new authService();
