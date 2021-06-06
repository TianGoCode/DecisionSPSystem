import React,{useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import { Link, useLocation, useHistory } from 'react-router-dom'
import {getUngVienAll} from '../axios'

export default function Main() {

    let location = useLocation()
    let history = useHistory()
    const [trongso, setTrongSo] = useState([0.1,0.2,0.1,0.1,0.1]);
    const [dataUngVien, setDataUngVien] = useState([])
    const [indexCheck, setIndexCheck] = useState('')

    // {
    //     hoten: "TranDoanvu",
    //         diachi: "Hanoi",
    //             kn: "cvcvcv",
    //                 td: "cccc",
    //                     nn: "123"
    // }

    useEffect(() => {
        getUngVienAll().then(res => {
            setDataUngVien(res.data)
        })
    },[])

    const renderItem = (item,index) => {
        return (<tr key={index}>
            <td>{index+1}</td>
            <td>{item.hoVaTen}</td>
            <td>{item.diaChi}</td>
            <td>{item.kinhNghiem}</td>
            <td>{item.trinhDoHocVan}</td>
            <td>{item.trinhDoNgoaiNgu}</td>
            <td><input type="checkbox" onChange={() => {setIndexCheck(item._id)}}/></td>
        </tr>);
    }

    const showInfor = () => {
        history.push('/showuv/'+indexCheck)
    }

    const addInfor = () => {
        history.push('/create-uv')
    }

    const editInfor = () => {
        history.push('/edit/'+indexCheck)
    }

    return (
        <div>
            <div id="container-box">
               <div id="mid-box">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Họ Tên</th>
                                <th>Địa chỉ</th>
                                <th>Kinh nghiệm làm việc</th>
                                <th>Trình độ học vấn</th>
                                <th>Điểm ngoại ngữ</th>
                                <th>V</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataUngVien.map(renderItem)}
                        </tbody>
                    </Table>

                    <div id="roll-box">
                        <button onClick={showInfor}>Xem thông tin ứng viên</button>
                        <button onClick={addInfor}>Thêm ứng viên</button>
                        <button onClick={editInfor}>Sửa ứng viên</button>
                        <button>Xóa ứng viên</button>
                        <button>Thay đổi trọng số</button>
                        <button>Kết quả</button>
                    </div>
               </div>
                <div id="bot-box">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Trọng số</th>
                                <th>{trongso[0]}</th>
                                <th>{trongso[1]}</th>
                                <th>{trongso[2]}</th>
                                <th>{trongso[3]}</th>
                                <th>{trongso[4]}</th>
                            </tr>
                        </thead>
                    </Table>
                </div>
            </div>
        </div>
    )
}
