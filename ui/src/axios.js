import axios from 'axios'

let instantAxios = axios.create({
    timeout: 20000,
    baseURL: 'http://localhost:8000'
})

export const getUV = () => {
    return instantAxios.get('/create/'+id)
}