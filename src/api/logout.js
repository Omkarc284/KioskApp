import axios from 'axios';

const logout = (token) => 
    axios.create({
        baseURL: 'http://192.168.0.106:3000/keeperauth',
        headers: {
            Authorization: `Bearer ` + token
        }
    })


export default logout;