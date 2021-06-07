import axios from 'axios'

let instantAxios = axios.create({
    timeout: 20000,
    baseURL: 'http://localhost:8000'
})

export const getUngVienAll = () => {
    return instantAxios.get('/candidate')
}

export const getKQ = () => {
    return instantAxios.get('/candidate/calculate')
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

export const deleteUngVien = (id) => {
    return instantAxios.get('/candidate/delete/'+id)
}

export const updateW = (body) => {
    return instantAxios.put('/candidate/weight/update',body)
}

export const getW = () => {
    return instantAxios.get('/candidate/weight/read')
}