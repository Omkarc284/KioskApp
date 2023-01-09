import axios from 'axios';

const upidetails = (token) => 
    axios.create({
        baseURL: 'http://192.168.0.106:3000/upi',
        headers: {
            Authorization: `Bearer ` + token
        }
    })


export default upidetails;