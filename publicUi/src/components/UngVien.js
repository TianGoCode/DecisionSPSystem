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

    const changeDiaChi = (par, data) => {
        let dc = data.diaChi
        switch (par) {
            case '0': dc = 'Rất xa (8km+)'
                break;
            case '1': dc = 'Xa (5km ~ 8km)'
                break;
            case '2': dc = 'Vừa (2km ~ 5km)'
                break;
            case '3': dc = 'Gần (500m ~ 2km)'
                break;
            case '4': dc = 'Rất gần (~500m)'
                break;
        }

        return dc;
    }

    const changeKn = (par, data) => {
        let dc = data.kinhNghiem
        switch (par) {
            case '0': dc = 'Chwa có kinh nghiệm thực tập'
                break;
            case '1': dc = 'Thực tập 6 tháng - làm việc 1 năm'
                break;
            case '2': dc = 'Làm việc 2 năm trở lên'
                break;
        }

        return dc;
    }

    const changeHocVan = (par, data) => {
        let dc = data.trinhDoHocVan
        switch (par) {
            case '0': dc = 'Trình độ tốt nghiệp cấp 3'
                break;
            case '1': dc = 'Trình độ đại học yếu'
                break;
            case '2': dc = 'Trình độ đại học trung bình'
                break;
            case '3': dc = 'Trình độ đại học khá'
                break;
            case '4': dc = 'Trình độ đại học giỏi'
                break;
            case '5': dc = 'Sau đại học'
                break;

        }

        return dc;
    }

    const changeNN = (par, data) => {
        let dc = data.trinhDoHocVan
        switch (par) {
            case '0': dc = 'Toeic 0~450'
                break;
            case '1': dc = 'Toeic 450~800'
                break;
            case '2': dc = 'Toeic 800~900'
                break;


        }

        return dc;
    }

    return (
        <div>
            <div id="tt-ung-vien">
                <h1>Thông tin ứng viên</h1>
                <label>Họ và Tên:</label><span>{ungVien.hoVaTen}</span> <br />
                <label>Địa chỉ:</label><span>{changeDiaChi(ungVien.diaChi, ungVien)}</span> <br />
                <label>Gmail:</label><span>{ungVien.mail}</span> <br />
                <label>Ngày sinh:</label><span>{(new Date(ungVien.ngaySinh)).toDateString()}</span> <br />
                <label>Số điện thoại:</label><span>{ungVien.sdt}</span> <br />
                <label>Kinh nghiệm làm việc:</label><span>{changeKn(ungVien.kinhNghiem, ungVien)}</span> <br />
                <label>Trình độ học vấn:</label><span>{changeHocVan(ungVien.trinhDoHocVan, ungVien)}</span> <br />
                <label>Trình độ ngoại ngữ:</label><span>{changeNN(ungVien.trinhDoNgoaiNgu, ungVien)}</span> <br />
                <label>Vị trí ứng tuyển:</label><span>{ungVien.viTriUngTuyen}</span> <br />
            </div>
        </div>
    )


}
