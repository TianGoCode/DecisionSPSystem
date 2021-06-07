import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { getUngVien } from '../axios'

export default function UngVien() {
    const param = useParams()
    const [ungVien, setUngVien] = useState('');
    const [id, setId] = useState(param.id)

    useEffect(() => {
        if (id) {
            getUngVien(id).then(res => {
                console.log(res.data)
                setUngVien(res.data)
            })
        }
    }, [])

    return (
        <div>
            <div id="tt-ung-vien">
                <h1>Thông tin ứng viên</h1>
                <label>Họ và Tên:</label><span>{ungVien.hoVaTen}</span> <br />
                <label>Địa chỉ:</label><span>{ungVien.diaChi}</span> <br />
                <label>Gmail:</label><span>{ungVien.mail}</span> <br />
                <label>Ngày sinh:</label><span>{ungVien.ngaySinh}</span> <br />
                <label>Số điện thoại:</label><span>{ungVien.sdt}</span> <br />
                <label>Kinh nghiệm làm việc:</label><span>{ungVien.kinhNghiem}</span> <br />
                <label>Trình độ học vấn:</label><span>{ungVien.trinhDoHocVan}</span> <br />
                <label>Trình độ ngoại ngữ:</label><span>{ungVien.trinhDoNgoaiNgu}</span> <br />
                <label>Vị trí ứng tuyển:</label><span>{ungVien.viTriUngTuyen}</span> <br />
            </div>
        </div>
    )


}
