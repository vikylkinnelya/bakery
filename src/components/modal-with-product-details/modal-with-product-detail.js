import { Modal } from 'react-bootstrap';
import ProductCard from '../product-card';
import { connect } from 'react-redux';
import { addToCart, showTost, setProductModal } from '../../actions';

const ModalWithProductDetail = ({ product, addToCart, showTost, productModal, setProductModal }) => {

    return (
        <Modal
            show={productModal}
            onHide={() => setProductModal(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='modal-product-detail'
        >
            <Modal.Header closeButton />

            <Modal.Body>
                <ProductCard
                    product={product}
                    addToCart={addToCart}
                    showTost={showTost}
                    setProductModal={setProductModal}
                />
            </Modal.Body>


        </Modal>
    )
}

const mapStateToProps = state => {
    return {
        productModal: state.productModal
    }
}

const mapDispatchToProps = {
    addToCart,
    showTost,
    setProductModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWithProductDetail)