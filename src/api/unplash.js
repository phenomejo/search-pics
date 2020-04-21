import axios from 'axios'

const KEY = '31c51c97bf895aaf94a02c4b1f792b5f9c1130e49371aa694a48942ae0c30b3a'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${KEY}`
    }
})