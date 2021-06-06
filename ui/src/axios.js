import axios from 'axios'

let instantAxios = axios.create({
    timeout: 20000,
    baseURL: 'http://localhost:8000'
})

export const getUngVienAll = () => {
    return instantAxios.get('/candidate')
}

export const getUngVien = (id) => {
    return instantAxios.get('/candidate/find/'+id)
}

export const createUngVien = (body) => {
    return instantAxios.post('/candidate',body)
}

export const updateUngVien = (body, id) => {
    return instantAxios.put('/candidate/update/'+id,body)
}

