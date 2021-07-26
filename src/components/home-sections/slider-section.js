import { Carousel } from 'react-bootstrap';

const SliderSection = () => {
    return (
        <section id="slider-container" className="top-section">
            <Carousel fade
                controls={false}
                className='img-carousel offset-borders'
                interval={7500}>
                <Carousel.Item>
                    <img className='img-fluid' alt="tarts" src="https://firebasestorage.googleapis.com/v0/b/bakery-23677.appspot.com/o/slider%2Fslider-1-min.jpg?alt=media&token=3bf82263-545d-4be1-8f6b-ed693ca65ddc"  />
                    <Carousel.Caption className="ms-layer">
                        <h2 className="ms-layer">Best Of Our Tartlet Selection</h2>
                        <h3 className="ms-layer">There’s something to please everyone here, so tuck in!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-fluid' alt="croissants" src="https://firebasestorage.googleapis.com/v0/b/bakery-23677.appspot.com/o/slider%2Fslider-2-min.jpg?alt=media&token=4ea738d6-2214-4ee9-bfaa-853e16900dd9"  />
                    <Carousel.Caption className="ms-layer">
                        <h2 className="ms-layer">Best Of Our Breakfast Selection</h2>
                        <h3 className="ms-layer">Our best-selling breakfast pastries</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-fluid' alt="breads" src="https://firebasestorage.googleapis.com/v0/b/bakery-23677.appspot.com/o/slider%2Fslider-3-min.jpg?alt=media&token=98845a9e-98c5-4614-9d4c-a49d526f7611"  />
                    <Carousel.Caption className="ms-layer">
                        <h2 className="ms-layer">Pain De Campagne</h2>
                        <h3 className="ms-layer">Soft blend of natural yeast, rye flour, milled flour and sea salt</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-fluid' alt="escargot" src="https://firebasestorage.googleapis.com/v0/b/bakery-23677.appspot.com/o/slider%2Fslider-4-min.jpg?alt=media&token=c1db7dc1-967f-452a-80bc-d7e477ae44f5"  />
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