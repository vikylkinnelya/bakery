import { Col, Row } from 'react-bootstrap';
import CartItem from '../cart-item';
import { connect } from 'react-redux';
import { setFormVisibility } from '../../../actions';


const CartList = ({ cart, cartTotalPrice, formIsOpen, setFormVisibility, customersData }) => {

    return (
        <>
            <Col className='cart-items-list '>

                <Row >
                    <h1>Your order:</h1>
                </Row>

                {cart != null && cart.length > 0 && cart.map(cartItem => {
                    return (
                        <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                        />
                    )
                })}

                <Row className='row total-order-price' lg={{ span: 10, offset: 1 }}>
                    <Col lg={4}>
                        <h3>total order price:</h3>
                    </Col>
                    <Col lg={1}>
                        <h2>${cartTotalPrice.toFixed(2)}</h2>
                    </Col>
                </Row>

                {!formIsOpen && !customersData &&
                    <Row className='btn-order'>
                        <button
                            aria-label='order products'
                            title='order products'
                            onClick={() => setFormVisibility()}>
                            <h3>order</h3>
                        </button>
                    </Row>
                }
            </Col>
        </>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        cartTotalPrice: state.cartTotalPrice,
        formIsOpen: state.formIsOpen,
    }
}

const mapDispatchToProps = {
    setFormVisibility,
}


export default connect(mapStateToProps, mapDispatchToProps)(CartList)