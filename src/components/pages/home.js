import React, { Component } from 'react';
import { FormForFeedback } from '../forms';
import { Col, Container, Row, Tab, Nav, Image, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';
import WithRestoService from '../hoc';
import { setMenu, setLoading, setError, setMenuType, addToCart, setMenuPage, setMenuTotalItems } from '../../actions';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ShopItem from '../shop-item';
import './styles.css'

class Home extends Component {

    state = {
        feedback: false,
        respMsgIsShown: false
    }

    setFeedbackData = (data) => {
        this.setState({ feedback: data })
    }
    setResponseMessage = () => {
        this.setState({ respMsgIsShown: true })
    }

    componentDidMount() {
        const { RestoService, setMenuTotalItems, setMenu, setError, setLoading } = this.props;

        setLoading(true)

        RestoService.getMenuItems('all', 1)
            .then(res => setMenu(res)) //в этом экшене изменяется так же и ожидание
            .catch(error => setError())
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { RestoService, setLoading, setError, menuCurrPage } = this.props

        if (this.state.feedback !== prevState.feedback) {
            setLoading(true)
            RestoService.setFeedback(this.state.feedback)
                .catch(error => setError())
            setLoading(false)
        }

        if ((menuCurrPage !== prevProps.menuCurrPage)) {
            setLoading()

            RestoService.getMenuItems('all', menuCurrPage)
                .then(res => setMenu(res, menuCurrPage))
                .catch(error => setError())
        }
    }


    render() {
        const { menuItems, loading, error, menuType, setMenuType, setMenuPage, addToCart, menuCurrPage, menuTotalItems } = this.props

        return (
            <>
                <Container>

                    <section id="slider-container" className="top-section">
                        <LazyLoadComponent>
                            <div className="ms-fullscreen-template">
                                <Carousel className='img-carousel' interval={7500}>
                                    <Carousel.Item>
                                        <Image fluid src="images/slider/1.jpg" alt="header img" />
                                        <Carousel.Caption className="ms-layer">
                                            <h2 className="ms-layer">Coffe and Croissant</h2>
                                            <h3 className="ms-layer">Pleasure and Taste in one Place</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image fluid src="images/slider/1.jpg" alt="header img" />
                                        <Carousel.Caption className="ms-layer">
                                            <h2 className="ms-layer">Coffe and Croissant</h2>
                                            <h3 className="ms-layer">Pleasure and Taste in one Place</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image fluid src="images/slider/1.jpg" alt="header img" />
                                        <Carousel.Caption className="ms-layer">
                                            <h2 className="ms-layer">Coffe and Croissant</h2>
                                            <h3 className="ms-layer">Pleasure and Taste in one Place</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>

                            </div>

                        </LazyLoadComponent>
                    </section>

                    <section id="products-section">
                        <div className="section-content">
                            <LazyLoadComponent>
                                <header className="section-header">
                                    <h1>Our latest bakery products</h1>
                                    <p>Check some of our best products and feel the great passion for food</p>
                                </header>

                                <Carousel className='shop-slide'>
                                    <Row className='product-row'>
                                        {!loading && menuItems != null && menuItems.length > 0 && menuItems.map(menuItem => (
                                            <ShopItem
                                                key={menuItem.id}
                                                menuItem={menuItem}
                                                menuType={menuType}
                                                onAddToCart={addToCart}
                                            />
                                        ))}
                                    </Row>
                                </Carousel>

                                <p className="text-center onscroll-animate">
                                    <Link className="button-void" to='/shop/all'>See all our products</Link>
                                </p>
                                <div className="margin-60"></div>
                            </LazyLoadComponent>
                        </div>
                    </section>

                    <section id="services-section">
                        <LazyLoadComponent>
                            <header className="section-header onscroll-animate">
                                <h1>Main services we provide</h1>
                                <p>Our services are the best in town, we provide great quality baked products</p>
                            </header>
                            <Row >
                                <Col sm={3} >
                                    <div className="service-box">
                                        <div className="icon-big-container">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                width="1000px" height="1000px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" >
                                                <path fillRule="evenodd" clipRule="evenodd" d="M212,221.98C85.964,187.169-7.941,251.248,1.822,368.833
                                                    C12.704,499.854,173.083,554.99,247.029,614.643c11.223,93.028,30.146,178.345,41.392,271.35
                                                    c113.273-60.703,353.142-66.429,496.766-28.743c13.14-86.846,30.934-169.037,44.575-255.358
                                                    c60.497-35.176,153.685-105.619,168.764-201.133c18.843-119.102-66.68-197.21-194.222-162.81
                                                    c20.53-149.407-258.347-155.806-283.417-41.506C484.741,71.227,230.387,105.114,212,221.98z"/>
                                            </svg>
                                        </div>
                                        <h2>Chef’s Hat</h2>
                                        <div className="horizontal-delimiter"></div>
                                        <p>Whether the flitting attendance of the one still and solitary jet had gradually worked upon Ahab.</p>
                                        <Link Link to='breakfast' onClick={() => setMenuType('breakfast')}> more </Link>
                                    </div>
                                </Col>
                                <Col sm={3} >
                                    <div className="service-box">
                                        <div className="icon-big-container">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                width="1000px" height="1000px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M686.344,504.227c6.836-54.001,35.174-164.385-6.219-193.098
                                                    c-28.045-19.479-110.537-9.337-151.996-9.337c-49.582,0-116.158-7.521-164.437,0c-91.452,14.237-52.904,137.486-40.33,211.772
                                                    c6.596,38.924,12.473,137.007,40.33,155.732c47.868,32.174,198.272-12.232,266.817,9.354
                                                    C677.659,650.21,676.836,579.403,686.344,504.227z M220.981,357.849C148.923,389.184,23.24,489.647,3.813,572.739
                                                    C-13.902,648.6,32.098,699.38,99.993,700.443c62.858,0.977,172.299,7.589,204.765-28.028
                                                    c-15.881-104.49-18.708-222.086-46.531-314.566C243.356,352.623,228.999,354.371,220.981,357.849z M925.221,697.325
                                                    c111.838-48.896,80.195-161.489,21.723-224.228c-52.287-56.125-136.578-116.105-201.646-105.912
                                                    c-19.857,41.289-21.553,98.682-27.926,152.614c-6.477,54.67-12.85,112.491-12.404,161.952
                                                    C753.006,712.418,853.024,690.9,925.221,697.325z"/>
                                            </svg>
                                        </div>
                                        <h2>Sweet's and stuff</h2>
                                        <div className="horizontal-delimiter"></div>
                                        <p>Whether the flitting attendance of the one still and solitary jet had gradually worked upon Ahab.</p>
                                        <Link to='#'> more </Link>
                                    </div>
                                </Col>
                                <Col sm={3} >
                                    <div className="service-box">
                                        <div className="icon-big-container">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                width="1000px" height="1000px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M387.273,318.427c-24.886,8.352-57.601,49.199-79.439,77.621
                                                    c-23.69,30.829-47.38,82.2-79.438,80.297c-26.283-1.549-46.623-33.304-43.575-61.557c3.047-28.169,30.257-37.093,33.321-56.203
                                                    C154.328,372.627,90.8,412.464,49.01,462.959c-28.186,34.063-73.023,118.956-33.321,173.963
                                                    c44.804,62.098,228.197,48.189,351.076,48.189c144.212,0,300.21,0.809,407.448,2.678c38.911,0.672,94.845,3.688,130.691,0
                                                    c65.633-6.787,115.05-75.617,87.134-147.21c-12.241-31.352-42.936-47.785-69.185-74.926c-39.215,3.064-76.206,69.672-112.76,69.572
                                                    c-29.785-0.067-52.382-25.997-48.694-58.88c4.748-42.261,56.17-48.424,76.88-80.297c-49.906-36.116-103.836,7.627-143.505,48.188
                                                    c-28.203,28.825-116.784,126.819-130.692,40.141c-13.537-84.389,77.436-113.383,107.625-155.224
                                                    c-12.156-3.368-26.637-4.293-38.423-8.032c-40.09,24.212-75.836,33.069-112.76,66.912
                                                    c-25.391,23.235-68.191,108.651-107.625,109.729c-26.384,0.708-51.405-25.07-51.253-53.525
                                                    c0.202-42.43,96.023-108.635,97.371-133.824C437.785,317.99,408.656,311.271,387.273,318.427z"/>
                                            </svg>
                                        </div>
                                        <h2>Lots of bread</h2>
                                        <div className="horizontal-delimiter"></div>
                                        <p>Whether the flitting attendance of the one still and solitary jet had gradually worked upon Ahab.</p>
                                        <Link to='#'> more</Link>
                                    </div>
                                </Col>
                                <Col sm={3} >
                                    <div className="service-box">
                                        <div className="icon-big-container">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                width="1000px" height="1000px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" >
                                                <path fillRule="evenodd" clipRule="evenodd" d="M876.669,598.186c-203.68,79.196-554.465,82.353-763.607,6.949
                                                    c-0.125,21.826-6.734,37.066-6.859,58.893C60.189,685.944,2.331,705.249,0.059,757.577
                                                    c-3.157,72.814,120.998,115.854,198.604,135.136c177.391,44.106,428.312,42.063,602.647,0
                                                    c77.039-18.579,201.591-59.392,198.638-135.136c-2.339-59.505-69.815-70.656-109.607-100.478
                                                    C886.571,636.682,883.573,615.469,876.669,598.186z"/>
                                                <g>
                                                    <g>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M595.858,300.917C561.973,263.511,571.034,346,595.858,300.917L595.858,300.917z
                                                             M318.513,307.844c-19.907,42.812,47.332,34.681,34.238,3.475c129.537-6.223,276.471-27.209,349.263-90.098
                                                            c20.44-17.647,41.608-45.583,37.679-76.221c-13.877-17.147-34.84-25.028-58.21-27.731
                                                            c-144.039-16.67-360.517,42.971-407.485,107.427c-9.789,13.423-16.432,34.84-13.695,55.417
                                                            C274.929,294.195,291.906,305.891,318.513,307.844z M462.324,349.43C527.224,391.583,481.152,269.802,462.324,349.43
                                                            L462.324,349.43z M804.762,103.415c0.728-3.884,3.793-5.405,6.837-6.927c3.384-21.349-13.695-23.847-23.961-13.877
                                                            C786.956,95.988,793.065,102.529,804.762,103.415z M746.529,228.148c9.356,2.521,6.904-6.881,13.718-6.927
                                                            C763.427,180.613,716.776,213.908,746.529,228.148z M910.917,68.779c3.226,10.584,16.648,10.856,17.103,24.234
                                                            C871.354,155.38,805.943,239.141,715.731,293.99c-84.374,51.283-195.367,102.953-304.77,110.879
                                                            c-122.485,8.88-231.888-34.727-291.064-93.55c-16.761-16.67-20.384-41.994-41.086-51.987
                                                            c6.95,48.126,51.215,86.487,92.449,114.354c69.953,47.264,164.434,69.521,270.521,58.915
                                                            C667.81,410.002,852.593,280.658,951.98,141.525c5.678,0.068,1.931,9.607,6.858,10.402
                                                            C959.975,111.25,922.228,73.799,910.917,68.779z M818.435,318.247c-31.524,34.522-4.179,119.328-51.352,124.733
                                                            c-43.198,4.974-43.13-53.623-85.601-58.892c-17.852,49.171-17.171,137.475-85.624,107.405
                                                            c-26.913-11.833-19.169-56.394-54.781-65.842c-31.059,22.894-22.894,75.517-58.21,86.646
                                                            c-47.423,14.922-64.241-48.104-102.726-69.317c-15.444,30.797-17.102,71.452-51.363,72.769
                                                            c-47.138,1.816-40.756-63.139-75.324-86.623c-23.427,16.057-14.695,51.76-44.515,55.439
                                                            c-44.039,5.428-50.682-50.375-51.375-103.952c-18.839,10.97-16.602,43.266-41.085,48.513v83.171
                                                            c213.775,70.065,553.283,47.263,749.899-20.804c-3.61-52.283-2.906-106.792,13.695-159.392
                                                            C861.769,326.854,843.781,305.096,818.435,318.247z M229.482,314.794c14.922-22.099-25.698-36.339-20.542-3.475
                                                            C212.982,315.294,221.033,315.249,229.482,314.794z M250.025,193.513c-12.81-14.922-41.994-5.996-34.238,20.781
                                                            C227.949,228.535,259.132,221.653,250.025,193.513z"/>
                                                    </g>
                                                </g>
                                                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M119.897,713.251c-4.531,18.328-30.218,9.925-41.086,13.877
                                                    C70,796.785,151.558,828.877,215.787,848.387c154.179,46.877,389.746,48.558,558.132,3.475
                                                    c71.884-19.236,166.297-46.809,157.53-128.208c-12.787-14.014-51.466-5.02-34.25-45.038c42.153,13.945,72.042,40.291,68.499,100.478
                                                    c-118.42,162.89-681.094,170.316-876.609,55.462c-24.313-14.285-57.029-46.286-58.21-72.791
                                                    C28.925,718.202,106.043,641.391,119.897,713.251z"/>
                                                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M893.793,730.58c-14.49,20.123-48.331,3.543-34.25-24.233
                                                    C877.871,696.513,898.153,700.487,893.793,730.58z"/>
                                                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M123.327,758.312c-21.656-17.942-5.576-46.083,13.695-45.061
                                                    C162.369,714.613,169.478,765.942,123.327,758.312z"/>
                                                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M856.113,737.508c-0.158,16.034-9.721,22.507-27.391,20.804
                                                    C800.992,740.414,844.099,704.62,856.113,737.508z"/>
                                                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M154.147,751.385c4.622-3.407,6.848-9.267,10.277-13.877
                                                    c6.836,0,13.695,0,20.543,0C212.017,768.44,156.679,791.448,154.147,751.385z"/>

                                                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M811.599,744.435c16.193,29.548-32.092,37.974-30.82,6.95
                                                    C785.934,741.459,799.834,738.348,811.599,744.435z"/>
                                                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M229.482,744.435c17.863,15.194,9.187,42.039-6.848,45.061
                                                    C192.132,795.241,178.392,736.917,229.482,744.435z"/>
                                                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M780.778,765.238c0.159,10.562-7.223,13.469-10.266,20.781
                                                    c-16.33,2.681-22.575-4.883-27.391-13.854C741.669,747.887,775.305,745.524,780.778,765.238z"/>
                                                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M277.416,789.495c-14.899,4.86-21.667,8.357-34.238,0
                                                    C231.197,743.73,295.392,755.2,277.416,789.495z"/>
                                                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M729.404,761.764c3.906,7.608,8.857,14.172,6.858,27.731
                                                    c-5.519,7.108-17.17,8.017-30.797,6.927C694.519,781.205,700.719,755.745,729.404,761.764z"/>
                                                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M321.931,792.947c-6.019,9.425-28.219,9.425-34.238,0
                                                    C279.834,757.471,329.789,757.471,321.931,792.947z"/>
                                                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M695.178,796.422c-5.542,5.95-14.332,8.607-27.414,6.927
                                                    C642.35,776.526,701.9,748.613,695.178,796.422z"/>
                                                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M363.028,779.093c0,8.085,0,16.171,0,24.256
                                                    c-9.63,4.815-19.691,9.153-30.82,3.476C316.4,781.932,345.12,761.128,363.028,779.093z"/>
                                                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M650.662,775.618c3.884,7.631,8.835,14.172,6.836,27.73
                                                    C631.539,838.075,595.041,766.987,650.662,775.618z"/>
                                                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M404.114,782.567c11.867,22.395-13.945,39.405-30.82,24.257
                                                    C365.674,781.772,387.364,771.848,404.114,782.567z"/>
                                                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M606.146,779.093c7.019,5.587,7.927,17.374,6.837,31.184
                                                    C584.071,840.506,558.611,770.371,606.146,779.093z"/>
                                                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M448.629,789.495c4.122,25.937-11.913,34.567-30.82,27.708
                                                    C400.65,793.628,432.015,768.781,448.629,789.495z"/>
                                                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M489.726,806.824c-4.486,11.333-26.8,14.422-34.25,3.452
                                                    C446.312,775.595,495.313,774.459,489.726,806.824z"/>
                                                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M534.241,789.495c3.066,20.44-5.155,29.435-20.555,31.183
                                                    C482.946,811.162,510.2,762.104,534.241,789.495z"/>
                                                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M571.92,789.495c3.589,22.121-5.541,31.364-27.413,27.708
                                                    C526.814,797.875,552.093,769.939,571.92,789.495z"/>
                                            </svg>
                                        </div>
                                        <h2>Cakes for weddings</h2>
                                        <div className="horizontal-delimiter"></div>
                                        <p>Whether the flitting attendance of the one still and solitary jet had gradually worked upon Ahab.</p>
                                        <Link to='#'> more</Link>
                                    </div>
                                </Col>


                            </Row>
                        </LazyLoadComponent>
                    </section>

                    <section id="heading-section">
                        <LazyLoadComponent>
                            <Row className="section-content">
                                <h2 className="heading-huge">Different types of bread products</h2>
                                <h3 className="heading-small">You will find them only the best products in our stores</h3>
                                <Image fluid id="bread-image" alt="bread" className="img-responsive" src="images/bread.png" />
                            </Row>
                        </LazyLoadComponent>
                    </section>

                    <section id="offer-section">
                        <div className="section-content">
                            <LazyLoadComponent>
                                <header className="section-header">
                                    <h1>This week offers</h1>
                                    <p>
                                        See our big range of departaments, whe offer a lot of attention to our patients<br /> see what fits you and give us a call
                                </p>
                                </header>
                                <Tab.Container id='left-tabs' defaultActiveKey="first" >
                                    <Row className='tabs-big-container'>
                                        <Nav className="flex-column tab-img-col nav">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">
                                                    <img alt="product 1" src="images/offer_nav_1.png" />
                                                </Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link eventKey="second">
                                                    <img alt="product 2 thumb" src="images/offer_nav_2.png" />
                                                </Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link eventKey="third">
                                                    <img alt="product 3 thumb" src="images/offer_nav_3.png" />
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>


                                        <Col md={9}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <Col md={12} className="offer-box">
                                                        <Row>
                                                            <Col md={5} className="offer-box-left">
                                                                <div className="offer-info">
                                                                    <h1>Cake a la forno</h1>
                                                                    <p>A popular contemporary legend holds that the archetypal pizza, Pizza Margherita, was invented in 1889, when the Royal Palace of Capodimonte commissioned the Neapolitan pizzaiolo (pizza maker) Raffaele Esposito to create a pizza in honor of the visiting Queen Margherita. Of the three different pizzas he created.</p>
                                                                    <h2>Ingredients:</h2>
                                                                    <ul className="list-numbers">
                                                                        <li>Croissants</li>
                                                                        <li>CSS Butter</li>
                                                                        <li>Code HTML</li>
                                                                        <li>Ignite fire</li>
                                                                        <li>jQuery Salt</li>
                                                                        <li>Slide Cheese</li>
                                                                    </ul>
                                                                    <div className="margin-20"></div>
                                                                    <button className='button tabs-button'>Order Now</button>

                                                                    <div className="margin-20"></div>
                                                                </div>
                                                            </Col>
                                                            <Col md={7} className="offer-box-right" >
                                                                <Image fluid src='images/offer1.png' />

                                                                <div className="product-label-container big-label">
                                                                    <div className="product-label">
                                                                        Week’s best seller
                                                            </div>
                                                                    <div className="product-label-bottom"></div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Tab.Pane>


                                                <Tab.Pane eventKey="second">

                                                </Tab.Pane>

                                                <Tab.Pane eventKey="third">

                                                </Tab.Pane>

                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </LazyLoadComponent>
                        </div>
                    </section>

                    <section id="contact-section">
                        <div className="section-content">
                            <LazyLoadComponent>
                                <Col md={4} className='main-contact-form' >
                                    <FormForFeedback
                                        className='form-contact'
                                        reason={'feedback'}
                                        page={'main'}
                                        setFeedbackData={this.setFeedbackData}
                                        setResponseMessage={this.setResponseMessage}
                                    />
                                </Col>
                                <div className="google-map-big-container">
                                    <div className="google-map">
                                        <div id="map-canvas" className='embed-responsive embed-responsive-4by3'>
                                            <iframe title='google-map' rel='preconnect'
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.3995335296822!2d-80.13511468497848!3d25.79038998362377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b485225f46d7%3A0x5ddb241a3d25a151!2zNDUwIExpbmNvbG4gUmQsIE1pYW1pIEJlYWNoLCBGTCAzMzEzOSwg0KHQqNCQ!5e0!3m2!1sru!2sby!4v1622555900769!5m2!1sru!2sby"

                                                style={{ border: 0 }} allowFullScreen=""
                                                loading="lazy">
                                            </iframe>
                                        </div>
                                    </div>
                                </div>
                            </LazyLoadComponent>
                        </div>

                    </section>

                    <section id="clients-section">
                        <LazyLoadComponent>
                            <header className="section-header">
                                <h1>Our trustworthy clients</h1>
                                <p>The companies that trust us are the main key to our succes, check out our top clients</p>
                            </header>
                            <Row className='clients-row'>
                                <Col xs={6} md={2} className="client-logo">
                                    <LazyLoadImage
                                        alt='client 1'
                                        delayTime={300}
                                        effect="blur"
                                        src={`./images/clients/client1.png`}
                                    />
                                </Col>
                                <Col xs={6} md={2} className="client-logo" >
                                    <LazyLoadImage
                                        alt='client 5'
                                        delayTime={350}
                                        effect="blur"
                                        src={`./images/clients/client5.png`}
                                    />
                                </Col>

                                <Col xs={6} md={2} className="client-logo">
                                    <LazyLoadImage
                                        alt='client 2'
                                        delayTime={400}
                                        effect="blur"
                                        src={`./images/clients/client2.png`}
                                    />
                                </Col>
                                <Col xs={6} md={2} className="client-logo">
                                    <LazyLoadImage
                                        alt='client 3'
                                        delayTime={450}
                                        effect="blur"
                                        src={`./images/clients/client3.png`}
                                    />
                                </Col>
                                <Col xs={6} md={2} className="client-logo">
                                    <LazyLoadImage
                                        alt='client 4'
                                        delayTime={500}
                                        effect="blur"
                                        src={`./images/clients/client4.png`}
                                    />
                                </Col>
                            </Row>
                        </LazyLoadComponent></section>


                </Container >
            </>
        )
    }


}

const mapStateToProps = state => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error,
        menuType: state.menuType,
        menuCurrPage: state.menuCurrPage,
        menuTotalItems: state.menuTotalItems,
        cart: state.cart
    }
}

const mapDispatchToProps = {
    setMenu,
    setLoading,
    setError,
    setMenuType,
    setMenuPage,
    setMenuTotalItems,
    addToCart
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(withRouter(Home)))
