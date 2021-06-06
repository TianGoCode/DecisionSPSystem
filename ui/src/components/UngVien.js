import React,{useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router'
import { getUngVien } from '../axios'

export default function UngVien() {
    const param = useParams()
    const [ungVien, setUngVien] = useState('');
    const [id, setId] = useState(param.id)

    useEffect( () => {
        if(id) {
             getUngVien(id).then(res => {
                console.log(res.data)
                setUngVien(res.data)
            })
        }
    },[])

    return (
        <div>
            <div>
                <h1>{ungVien.hoVaTen}</h1>
                <p>{ungVien.diaChi}</p>
                <p>{ungVien.mail}</p>
                <p>{ungVien.ngaySinh}</p>
                <p>{ungVien.sdt}</p>
                <p>{ungVien.kinhNghiem}</p>
                <p>{ungVien.trinhDoHocVan}</p>
                <p>{ungVien.trinhDoNgoaiNgu}</p>
                <p>{ungVien.viTriUngTuyen}</p>
            </div>
        </div>
    )
}
