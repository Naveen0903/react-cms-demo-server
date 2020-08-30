import React from "react";
import {Modal, Button} from "react-bootstrap";

const Popup = ({popupTitle, popupBody, showPopup, handleClose, handleSubmit, ErrorBody=""}) =>{

return(
    <Modal show={showPopup} onHide={handleClose} dialogClassName="modal-90w">
        <Modal.Header closeButton>
            <Modal.Title>{popupTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            {popupBody}
        </Modal.Body>
            {ErrorBody}
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Discard</Button>
            <Button variant="primary" onClick={handleSubmit}>Add</Button>
        </Modal.Footer>
    </Modal>
    )
}

export default Popup;