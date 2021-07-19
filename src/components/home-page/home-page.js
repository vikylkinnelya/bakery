import React, { Suspense, lazy } from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import { useEffect } from 'react';
import { ProductsSection, ServisesSection, OfferSection, ClientsSection, SliderSection } from '../home-sections';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import Spinner from '../spinner'; 
import { setMenu, setLoading, setError, setMenuType, addToCart, setLatestProducts, setWeekOffer } from '../../actions';
const ContactSection = lazy(() => import ('../home-contact-section'))

const Home = ({ RestoService, setMenu, setError, setLoading, latestProducts, setLatestProducts, setWeekOffer, setMenuType, weekOfferItems }) => {

    useEffect(() => {
        setLoading(true)
        RestoService.fetchMenu()
            .then(res => setMenu(res)) //в этом экшене изменяется так же и ожидание
            .then(res => setLatestProducts())
            .then(res => setWeekOffer())
            .catch(error => setError(error))
    }, [])

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
                        <Image fluid id="bread-image" alt="bread" className="img-responsive" src="https://firebasestorage.googleapis.com/v0/b/bakery-23677.appspot.com/o/pages%2Fbread-types-min.jpg?alt=media&token=1f1878e7-29ef-4d32-aeef-47006fb98f20" />
                    </Row>
                </section>

                {weekOfferItems.length > 0 && <OfferSection />}

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
        cart: state.cart,
        latestProducts: state.latestProducts,
        weekOfferItems: state.weekOfferItems,
    }
}

const mapDispatchToProps = {
    setMenu,
    setLoading,
    setError,
    setMenuType,
    addToCart,
    setLatestProducts,
    setWeekOffer,
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(Home))
