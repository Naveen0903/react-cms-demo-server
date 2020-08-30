import {Modal} from "react-bootstrap";



const PopupLarge = ({lgShow=false, handleClose, title="", body}) => {

return(
        <Modal
            size="lg"
            show={lgShow}
            onHide={handleClose}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                {title}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {body}
            </Modal.Body>
        </Modal>
    )
}

export default PopupLarge;