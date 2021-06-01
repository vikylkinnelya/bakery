import React from 'react';
import { Modal } from 'react-bootstrap'

import './styles.css'

const ModalAfterForm = ({ modalIsShown, setModalVisibility }) => {

    return (
        <Modal
            className='modal-order'
            show={modalIsShown}
            onHide={() => setModalVisibility()}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className='modal-order-header' />

            <Modal.Body className='modal-order-body'>
                <h4>Thank you for your odrder!</h4>
                <h5>Our operator will contact you in a few minutes</h5>
            </Modal.Body>
            <Modal.Footer className='modal-order-footer'>
                <button
                    className='btn-order'
                    onClick={() => setModalVisibility()}
                >
                    Ok, I'm waiting
                </button>
            </Modal.Footer>
        </Modal>

    )
}

export default ModalAfterForm