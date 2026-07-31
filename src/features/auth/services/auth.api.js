import axios from "axios"


// const api = axios.create({
//     baseURL: "http://localhost:3000",
//     withCredentials: true
// })

// const BASE = "http://localhost:3000"

// Check if the current window location is running on localhost or an IP address
const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

// Set the base URL dynamically
const BASE = isLocal 
    ? "http://localhost:3000" 
    : "https://nexthire-backend-gmyc.onrender.com"; // Replace with your actual live backend URL

const api = axios.create({ 
    baseURL: BASE, 
    withCredentials: true 
});

export async function register({ username, email, password }) {

    try {
        const response = await api.post('/api/auth/register', {
            username, email, password
        })

        return response.data

    } catch (err) {

        console.log(err)

    }

}

export const login = async({ email, password })=> {
    try {
        const response = await axios.post(`${BASE}/api/auth/login`, {
            email, password
        },{
            withCredentials:true
        }
    )
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export async function logout() {
    try {

        const response = await api.get("/api/auth/logout")

        return response.data

    } catch (err) {
        console.log(err)
    }
}

export async function getMe() {

    try {

        const response = await api.get("/api/auth/get-me")

        return response.data

    } catch (err) {
        console.log(err)
    }

}