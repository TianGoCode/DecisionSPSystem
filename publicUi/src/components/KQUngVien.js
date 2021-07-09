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

    const changeDiaChi = (par, data) => {
        let dc = data.diaChi
        switch (par) {
            case'0': dc = 'Rất xa (8km+)'
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
        <div id="container-best">
            <div id="bestSS">
                <h1>Thông tin ứng viên Best SS</h1>
                <label>Họ và Tên:</label><span>{bestSS.hoVaTen}</span> <br />
                <label>Địa chỉ:</label><span>{changeDiaChi(bestSS.diaChi, bestSS)}</span> <br />
                <label>Gmail:</label><span>{bestSS.mail}</span> <br />
                <label>Ngày sinh:</label><span>{(new Date(bestSS.ngaySinh)).toDateString()}</span> <br />
                <label>Số điện thoại:</label><span>{bestSS.sdt}</span> <br />
                <label>Kinh nghiệm làm việc:</label><span>{changeKn(bestSS.kinhNghiem, bestSS)}</span> <br />
                <label>Trình độ học vấn:</label><span>{changeHocVan(bestSS.trinhDoHocVan, bestSS)}</span> <br />
                <label>Trình độ ngoại ngữ:</label><span>{changeNN(bestSS.trinhDoNgoaiNgu, bestSS)}</span> <br />
                <label>Vị trí ứng tuyển:</label><span>{bestSS.viTriUngTuyen}</span> <br />
            </div>
            <div id="bestSM">
                <h1>Thông tin ứng viên Best SM</h1>
                <label>Họ và Tên:</label><span>{bestSM.hoVaTen}</span> <br />
                <label>Địa chỉ:</label><span>{changeDiaChi(bestSM.diaChi, bestSM)}</span> <br />
                <label>Gmail:</label><span>{bestSM.mail}</span> <br />
                <label>Ngày sinh:</label><span>{(new Date(bestSS.ngaySinh)).toDateString()}</span> <br />
                <label>Số điện thoại:</label><span>{bestSM.sdt}</span> <br />
                <label>Kinh nghiệm làm việc:</label><span>{changeKn(bestSM.kinhNghiem, bestSM)}</span> <br />
                <label>Trình độ học vấn:</label><span>{changeHocVan(bestSM.trinhDoHocVan, bestSM)}</span> <br />
                <label>Trình độ ngoại ngữ:</label><span>{changeNN(bestSM.trinhDoNgoaiNgu, bestSM)}</span> <br />
                <label>Vị trí ứng tuyển:</label><span>{bestSM.viTriUngTuyen}</span> <br />
            </div>
            <div id='bestCS'>
                <h1>Thông tin ứng viên BEST CS</h1>
                <label>Họ và Tên:</label><span>{bestCS.hoVaTen}</span> <br />
                <label>Địa chỉ:</label><span>{changeDiaChi(bestCS.diaChi, bestCS)}</span> <br />
                <label>Gmail:</label><span>{bestCS.mail}</span> <br />
                <label>Ngày sinh:</label><span>{(new Date(bestSS.ngaySinh)).toDateString()}</span> <br />
                <label>Số điện thoại:</label><span>{bestCS.sdt}</span> <br />
                <label>Kinh nghiệm làm việc:</label><span>{changeKn(bestCS.kinhNghiem, bestCS)}</span> <br />
                <label>Trình độ học vấn:</label><span>{changeHocVan(bestCS.trinhDoHocVan, bestCS)}</span> <br />
                <label>Trình độ ngoại ngữ:</label><span>{changeNN(bestCS.trinhDoNgoaiNgu, bestCS)}</span> <br />
                <label>Vị trí ứng tuyển:</label><span>{bestCS.viTriUngTuyen}</span> <br />
            </div>
            
        </div>
    )
}
