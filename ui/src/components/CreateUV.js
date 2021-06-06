import React,{useState} from 'react'
import { useHistory, useParams } from 'react-router'

export default function CreateUV() {
    const param = useParams()
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [gmail, setGmail] = useState('')
    const [numberphone, setNumberphone] = useState('')
    const [exp, setExp] = useState('')
    const [trinhDo, setTrinhdo] = useState('')
    const [viTriut, setViTriut] = useState('')
    const [eng, setEng] = useState('')
    const [id, setId] = useState(param.id)
    
    useEffect(() => {
        if(id){
            getUV(id).then(res => {
                let data = res.data
                setName(data.name)
                setAddress(data.cvcv)
            })
        }
    })

    const submit = () => {

    }

    return (
        <div>
            <h1>Thêm ứng viên</h1>
            <input placeholder="Nhập vào tên" value={name} onChange={(e)=>setName(e.target.value)} />
            <input placeholder="Nhập địa chỉ" value={address} onChange={(e)=>setAddress(e.target.value)} />
            <input placeholder="Nhập ngày sinh" value={dateOfBirth} onChange={(e)=>setDateOfBirth(e.target.value)} />
            <input placeholder="Nhập vào gmail" value={gmail} onChange={(e)=>setGmail(e.target.value)} />
            <input placeholder="Nhập vào số điện thoại" value={numberphone} onChange={(e)=>setNumberphone(e.target.value)} />
            <input placeholder="Nhập vào kinh nghiệm" value={exp} onChange={(e)=>setExp(e.target.value)} />
            <input placeholder="Nhập vào trình độ" value={trinhDo} onChange={(e)=>setTrinhdo(e.target.value)} />
            <input placeholder="Nhập vào vị trí ứng tuyển" value={viTriut} onChange={(e)=>setViTriut(e.target.value)} />
            <input placeholder="Nhập vào ngoại ngữ"  value={eng} onChange={(e)=>setEng(e.target.value)}/>
            <button onClick={submit}>Submit</button>
        </div>
    )
}
