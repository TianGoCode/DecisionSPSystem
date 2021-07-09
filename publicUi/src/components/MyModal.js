import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { getW } from '../axios'
import {updateW} from '../axios'

export default function MyVerticallyCenteredModal(props) {
    const [w, setW] = useState([])
    const [w1, setW1] = useState('')
    const [w2, setW2] = useState('')
    const [w3, setW3] = useState('')
    const [w4, setW4] = useState('')
    useEffect(() => {
        getW().then((res) => {
            let data = res.data
            
            setW1(data[0])
            setW2(data[1])
            setW3(data[2])
            setW4(data[3])
        })
    },[])

    const update =()  =>{
        w.push(w1)
        w.push(w2)
        w.push(w3)
        w.push(w4)
        let body = {
            "weight": w,
        }
        updateW(body).then((res) => {
            alert("Cập nhật trọng số thành công")
            window.location.reload()
        })
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 style={
                    {
                        marginLeft: "250px",
                    }
                }>Thay đổi trọng số</h4>
                <p>
                    <label className="m-3">Trọng số 1:</label><input value={w1} onChange={(e) => setW1(e.target.value)} />
                    <label className="m-3">Trọng số 2:</label><input value={w2} onChange={(e) => setW2(e.target.value)} /><br />
                    <label className="m-3">Trọng số 3:</label><input value={w3} onChange={(e) => setW3(e.target.value)} />
                    <label className="m-3">Trọng số 4:</label><input value={w4} onChange={(e) => setW4(e.target.value)} /><br />
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={update}>Sumbit</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}