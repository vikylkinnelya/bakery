import React, { Suspense, lazy } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import { ProductsSection, ServisesSection, ClientsSection, SliderSection } from '../home-sections';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import LazyLoad from 'react-lazyload';
import Spinner from '../spinner';
import { setMenu, setWeekOffer, setLoading, setError, setMenuType, addToCart } from '../../actions';

const OfferSection = lazy(() => import ('../home-offer-section'))
const ContactSection = lazy(() => import('../home-contact-section')) 

const Home = ({ RestoService, setWeekOffer, setMenu, setError, setLoading, setMenuType }) => {

    useEffect(() => {
        setLoading(true)
        RestoService.fetchMenu()
            .then(res => setMenu(res)) //в этом экшене изменяется так же и ожидание
            .then(res => setWeekOffer())
            .catch(error => setError(error))
    }, [RestoService, setLoading, setError, setMenu, setWeekOffer])

    return (
        <Suspense fallback={<Spinner />}>
            <SliderSection />
            <Container>

                <ProductsSection />

                <ServisesSection
                    setMenuType={setMenuType} />

                <section id="heading-section">
                    <Row className="section-content">
                        <h2 className="heading-huge">Different types of bread products</h2>
                        <h3 className="heading-small">You will find them only the best products in our stores</h3>
                        <LazyLoad>
                            <img className='img-fluid' id="bread-image" alt="bread" src="https://firebasestorage.googleapis.com/v0/b/bakery-23677.appspot.com/o/pages%2Fbread-types-min.jpg?alt=media&token=1f1878e7-29ef-4d32-aeef-47006fb98f20" />
                        </LazyLoad>
                    </Row>
                </section>

                <OfferSection />

            </Container >

            <ContactSection />

            <ClientsSection />

        </Suspense>
    )
}


const mapStateToProps = state => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error,
        menuType: state.menuType,
        cart: state.cart
    }
}

const mapDispatchToProps = {
    setMenu,
    setLoading,
    setError,
    setMenuType,
    addToCart,
    setWeekOffer
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(Home))
