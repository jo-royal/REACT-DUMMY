import axios from "axios";

const loginURL = '/login'

export const loginRequest = async (email, password) => {
    try {
        const response = await axios.post(loginURL, {
            email: email,
            password: password
          })
        return(response.data)
    } catch (error) {
        console.log(error)
    }
}
const tokenURL = '/token'
export const tokenAuthCheck = async (token) => {
    try {
        const response = await axios.post(tokenURL, {token: token})
        return(response.data)
    } catch (error) {
        console.log(error)
    }
}