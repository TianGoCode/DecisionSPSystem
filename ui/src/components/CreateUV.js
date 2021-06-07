import React,{useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router'
import { getUngVien, createUngVien, updateUngVien} from '../axios'


export default function CreateUV() {
    const param = useParams()
    const history = useHistory()
    const [name, setName] = useState('')
    const [address, setAddress] = useState('0')
    const [dateOfBirth, setDateOfBirth] = useState(new Date())
    const [gmail, setGmail] = useState('')
    const [numberphone, setNumberphone] = useState('')
    const [exp, setExp] = useState('0')
    const [trinhDo, setTrinhdo] = useState('0')
    const [viTriut, setViTriut] = useState('')
    const [eng, setEng] = useState('0')
    const [id, setId] = useState(param.id)
    const [diaDiem, setdiaDiem] = useState(['rất xa(8km)','xa(5km ~ 8km)', 'vừa(2km ~ 5km)', 'gần(500m ~ 2km)','rất gần(~500m)'])
    const [suPhuHopExp, setSPH] = useState(['chưa có kinh nghiệm thực tập','thực tập 6 tháng/làm việc 1 năm','làm việc 2 năm trở lên'])
    const [suPHtrinhdoPV, setSPHTD] = useState(['trình độ tốt nghiệp C3','trình độ đại học tương đương yếu','trình độ đại học tương đương trung bình','trình độ đại học tương đương khá','trình độ đại học tương đương giỏi','sau đại học'])
    const [suPHn2 , setsuPHn2] = useState(['Toeic 0~450','Toeic 450~800','Toeic 800~990'])
    
    useEffect(() => {
        if(id){
            getUngVien(id).then(res => {
                let data = res.data
                setName(data.hoVaTen)
                setAddress(data.diaChi)
                setDateOfBirth(data.ngaySinh)
                setGmail(data.mail)
                setNumberphone(data.sdt)
                setExp(data.kinhNghiem)
                setEng(data.trinhDoNgoaiNgu)
                setTrinhdo(data.trinhDoHocVan)
                setViTriut(data.viTriUngTuyen)
            })
        }

    },[])

    const submit = () => {
        let body = {
            newCandidate:{
                hoVaTen: name,
                diaChi: address,
                ngaySinh: dateOfBirth,
                mail: gmail,
                sdt: numberphone,
                kinhNghiem: exp,
                trinhDoHocVan: trinhDo,
                trinhDoNgoaiNgu: eng,
                viTriUngTuyen: viTriut
            }
        }
        console.log(body)
        createUngVien(body).then(res => {
            history.push('/')
        })
    }

    const update = () => {
        let body = {
            data: {
                hoVaTen: name,
                diaChi: address,
                ngaySinh: dateOfBirth,
                mail: gmail,
                sdt: numberphone,
                kinhNghiem: exp,
                trinhDoHocVan: trinhDo,
                trinhDoNgoaiNgu: eng,
                viTriUngTuyen: viTriut
            }
        }
        console.log(body)
        console.log(id)
        updateUngVien(body, id).then(res => {
            history.push('/')
        })
    }

    return (
        <div id="tao-ung-vien">
            <h1>{id? 'Sửa ứng viên':'Thêm ứng viên'}</h1>
            <label>Họ và tên:</label><input placeholder="Nhập vào tên" value={name} onChange={(e)=>setName(e.target.value)} />
            <br />
            <label>Địa chỉ:</label><select value={address} onChange={(e)=>setAddress(e.target.value)}>
                {
                    diaDiem.map((item, index) => {

                       return <option key={index} value={index}>{item}</option>
                    })
                }
            </select>
            <br />
            <label>Ngày sinh:</label><input placeholder="Nhập ngày sinh" value={dateOfBirth} onChange={(e)=>setDateOfBirth(e.target.value)} />
            <br />
            <label>Gmail:</label><input placeholder="Nhập vào gmail" value={gmail} onChange={(e)=>setGmail(e.target.value)} />
            <br />
            <label>Số điện thoại:</label><input placeholder="Nhập vào số điện thoại" value={numberphone} onChange={(e)=>setNumberphone(e.target.value)} />
            <br />
            <label>Kinh nghiệm làm việc:</label><select value={exp} onChange={(e) => setExp(e.target.value)}>
                {
                    suPhuHopExp.map((item, index) => {

                        return <option key={index} value={index}>{item}</option>
                    })
                }
            </select>
            <br />
            <label>Trình độ học vấn:</label><select value={trinhDo} onChange={(e) => setTrinhdo(e.target.value)}>
                {
                    suPHtrinhdoPV.map((item, index) => {

                        return <option key={index} value={index}>{item}</option>
                    })
                }
            </select>
            <br />
            <label>Vị trí ứng tuyển:</label><input placeholder="Nhập vào vị trí ứng tuyển" value={viTriut} onChange={(e)=>setViTriut(e.target.value)} />
            <br />
            <label>Trình độ tiếng Anh:</label><select value={eng} onChange={(e) => setEng(e.target.value)}>
                {
                    suPHn2.map((item, index) => {

                        return <option key={index} value={index}>{item}</option>
                    })
                }
            </select>
            <br />
            <button onClick={id? update:submit}>Submit</button>
        </div>
    )
}
