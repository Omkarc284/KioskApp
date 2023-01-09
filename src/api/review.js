import axios from 'axios';

const ReviewPost = (token) => 
    axios.create({
        baseURL: 'http://192.168.0.106:3000/ratings',
        headers: {
            Authorization: `Bearer ` + token
        }
    })


export default ReviewPost;