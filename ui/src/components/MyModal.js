import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function MyVerticallyCenteredModal(props) {

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
                <h4>Thay đổi trọng số</h4>
                <p>
                    <label>Trọng số 1</label><input onChange={(e) => { }} />
                    <label>Trọng số 2</label><input onChange={(e) => { }} /><br />
                    <label>Trọng số 3</label><input onChange={(e) => { }} />
                    <label>Trọng số 4</label><input onChange={(e) => { }} /><br />
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button >Sumbit</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}