import {Image, Carousel } from 'react-bootstrap';
import './slider.css'

const SliderSection = () => {
    return (
        <section id="slider-container" className="top-section">
            <Carousel fade
                controls={false}
                className='img-carousel offset-borders'
                interval={7500}>
                <Carousel.Item>
                    <Image fluid src="bakery/images/slider-1.jpg" alt="tarts" />
                    <Carousel.Caption className="ms-layer">
                        <h2 className="ms-layer">Best Of Our Tartlet Selection</h2>
                        <h3 className="ms-layer">There’s something to please everyone here, so tuck in!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image fluid src="bakery/images/slider-2.jpg" alt="croissants" />
                    <Carousel.Caption className="ms-layer">
                        <h2 className="ms-layer">Best Of Our Breakfast Selection</h2>
                        <h3 className="ms-layer">Our best-selling breakfast pastries</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image fluid src="bakery/images/slider-3.jpg" alt="breads" />
                    <Carousel.Caption className="ms-layer">
                        <h2 className="ms-layer">Pain De Campagne</h2>
                        <h3 className="ms-layer">Soft blend of natural yeast, rye flour, milled flour and sea salt</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image fluid src="bakery/images/slider-4.jpg" alt="escargot" />
                    <Carousel.Caption className="ms-layer">
                        <h2 className="ms-layer">Escargot</h2>
                        <h3 className="ms-layer">Rich buttery dough filled with vanilla custard and plump raisins</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}
export default SliderSection;