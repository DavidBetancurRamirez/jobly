import axios from "axios"

export const BASE_URL = {
    register: 'http://localhost:8080/auth/register',
    user: 'http://localhost:8080/User'
}

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate =  axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true
});
