import axios from 'axios';

const ConfirmSale = (token) => 
    axios.create({
        baseURL: 'http://192.168.0.106:3000/sales',
        headers: {
            Authorization: `Bearer ` + token
        }
    })


export default ConfirmSale;