import axios from "axios";

const host = "http://127.0.0.1:8000/api/auth"

class authService {
    registerUser(payload) {
        return axios.post(`${host}/register`, payload);
    }
    login(payload) {
        return axios.post(`${host}/login`, payload);
    }
    confirmLogin(data) {
        return axios.post(`${host}/confirmLogin/${data.id}`, data.payload);
    }
}

export default new authService();
