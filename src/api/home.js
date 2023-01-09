import axios from 'axios';

const kioskApi = (token) => 
    axios.create({
        baseURL: 'http://192.168.0.106:3000/inventory',
        headers: {
            Authorization: `Bearer ` + token
        }
    })

export default kioskApi