import axios from "axios";
const token = localStorage.getItem('accessToken')
const host = "http://127.0.0.1:8000/api/auth"

class authService {
    addAddress(payload) {
        return axios.post(`${host}/user-profile/my-address/add`,{
            ...payload
        }, {
            headers: {
                'Authorization': `bearer ${token}`
            }
        });
    }
    getAddresses() {
        return axios.get(`${host}/user-profile/my-address`,{}, {
            headers: {
                'Authorization': `bearer ${token}`
            }
        });
    }
}

export default new authService();
