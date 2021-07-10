import './styles.css';
import { Container, Row, Image } from 'react-bootstrap';
import { useEffect } from 'react';
import { ClientsSection, ContactSection, OfferSection, ProductsSection, ServisesSection, SliderSection } from '../sections';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { setMenu, setLoading, setError, setMenuType, addToCart, setLatestProducts, setWeekOffer } from '../../actions';

const Home = ({ RestoService, setMenu, setError, setLoading, setLatestProducts, setWeekOffer, setMenuType, weekOfferItems }) => {

    useEffect(() => {
        setLoading(true)
        RestoService.fetchMenu()
            .then(res => setMenu(res)) //в этом экшене изменяется так же и ожидание
            .then(res => setLatestProducts())
            .then(res => setWeekOffer())
            .catch(error => setError(error))
    }, [])

    return (
        <>
            <SliderSection />
            <Container>

                <LazyLoadComponent>
                    <ProductsSection />
                </LazyLoadComponent>

                <LazyLoadComponent>
                    <ServisesSection
                        setMenuType={setMenuType} />
                </LazyLoadComponent>

                <LazyLoadComponent>
                    <section id="heading-section">
                        <Row className="section-content">
                            <h2 className="heading-huge">Different types of bread products</h2>
                            <h3 className="heading-small">You will find them only the best products in our stores</h3>
                            <Image fluid id="bread-image" alt="bread" className="img-responsive" src="bakery/docs/images/bread-types-min.jpg" />
                        </Row>
                    </section>
                </LazyLoadComponent>


                <LazyLoadComponent>
                    {weekOfferItems !== null && weekOfferItems.length > 0 &&
                        <OfferSection />
                    }
                </LazyLoadComponent>

            </Container >

            <LazyLoadComponent>
                <ContactSection />
            </LazyLoadComponent>

            <LazyLoadComponent>
                <ClientsSection />
            </LazyLoadComponent>

        </>
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
