import React,{useState, useEffect} from 'react'
import {getKQ} from '../axios'

export default function KQUngVien() {
    const [bestCS, setBestCS] = useState('')
    const [bestSM, setBestSM] = useState('')
    const [bestSS, setBestSS] = useState('')

    useEffect(() => {
        getKQ().then(res => {
            let data = res.data
            setBestSS(data.bestSS)
            setBestSM(data.bestSM)
            setBestCS(data.bestCS)
        })
    }, [])

    const changDiaChi = (par, data) => {
        let dc = data.diaChi
        switch (par) {
            case'0': dc = 'rất xa (8km+)'
            break;
            case '1': dc = 'xa (5km ~ 8km)'
            break;
            case '2': dc = 'vừa (2km ~ 5km)'
            break;
            case '3': dc = 'gần (500m ~ 2km)'
            break;
            case '4': dc = 'rất gần (~500m)'
        }

        return dc;
    }

    return (
        <div id="container-best">
            <div id="bestSS">
                <h1>Thông tin ứng viên Best SS</h1>
                <label>Họ và Tên:</label><span>{bestSS.hoVaTen}</span> <br />
                <label>Địa chỉ:</label><span>{bestSS.diaChi}</span> <br />
                <label>Gmail:</label><span>{bestSS.mail}</span> <br />
                <label>Ngày sinh:</label><span>{(new Date(bestSS.ngaySinh)).toDateString()}</span> <br />
                <label>Số điện thoại:</label><span>{bestSS.sdt}</span> <br />
                <label>Kinh nghiệm làm việc:</label><span>{bestSS.kinhNghiem}</span> <br />
                <label>Trình độ học vấn:</label><span>{bestSS.trinhDoHocVan}</span> <br />
                <label>Trình độ ngoại ngữ:</label><span>{bestSS.trinhDoNgoaiNgu}</span> <br />
                <label>Vị trí ứng tuyển:</label><span>{bestSS.viTriUngTuyen}</span> <br />
            </div>
            <div id="bestSM">
                <h1>Thông tin ứng viên Best SM</h1>
                <label>Họ và Tên:</label><span>{bestSM.hoVaTen}</span> <br />
                <label>Địa chỉ:</label><span>{bestSM.diaChi}</span> <br />
                <label>Gmail:</label><span>{bestSM.mail}</span> <br />
                <label>Ngày sinh:</label><span>{(new Date(bestSS.ngaySinh)).toDateString()}</span> <br />
                <label>Số điện thoại:</label><span>{bestSM.sdt}</span> <br />
                <label>Kinh nghiệm làm việc:</label><span>{bestSM.kinhNghiem}</span> <br />
                <label>Trình độ học vấn:</label><span>{bestSM.trinhDoHocVan}</span> <br />
                <label>Trình độ ngoại ngữ:</label><span>{bestSM.trinhDoNgoaiNgu}</span> <br />
                <label>Vị trí ứng tuyển:</label><span>{bestSM.viTriUngTuyen}</span> <br />
            </div>
            <div id='bestCS'>
                <h1>Thông tin ứng viên BEST CS</h1>
                <label>Họ và Tên:</label><span>{bestCS.hoVaTen}</span> <br />
                <label>Địa chỉ:</label><span>{bestCS.diaChi}</span> <br />
                <label>Gmail:</label><span>{bestCS.mail}</span> <br />
                <label>Ngày sinh:</label><span>{(new Date(bestSS.ngaySinh)).toDateString()}</span> <br />
                <label>Số điện thoại:</label><span>{bestCS.sdt}</span> <br />
                <label>Kinh nghiệm làm việc:</label><span>{bestCS.kinhNghiem}</span> <br />
                <label>Trình độ học vấn:</label><span>{bestCS.trinhDoHocVan}</span> <br />
                <label>Trình độ ngoại ngữ:</label><span>{bestCS.trinhDoNgoaiNgu}</span> <br />
                <label>Vị trí ứng tuyển:</label><span>{bestCS.viTriUngTuyen}</span> <br />
            </div>
            
        </div>
    )
}
