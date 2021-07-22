import { Carousel } from 'react-bootstrap';

const SliderSection = () => {
    return (
        <section id="slider-container" className="top-section">
            <Carousel fade
                controls={false}
                className='img-carousel offset-borders'
                interval={7500}>
                <Carousel.Item>
                    <img className='img-fluid' alt="tarts" src="https://firebasestorage.googleapis.com/v0/b/bakery-23677.appspot.com/o/slider%2Fslider-1.jpg?alt=media&token=cbed5082-b30d-4522-bb8c-536f1c0e393b"  />
                    <Carousel.Caption className="ms-layer">
                        <h2 className="ms-layer">Best Of Our Tartlet Selection</h2>
                        <h3 className="ms-layer">There’s something to please everyone here, so tuck in!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-fluid' alt="croissants" src="https://firebasestorage.googleapis.com/v0/b/bakery-23677.appspot.com/o/slider%2Fslider-2.jpg?alt=media&token=0025639b-1073-4399-97c2-829b6e399497"  />
                    <Carousel.Caption className="ms-layer">
                        <h2 className="ms-layer">Best Of Our Breakfast Selection</h2>
                        <h3 className="ms-layer">Our best-selling breakfast pastries</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-fluid' alt="breads" src="https://firebasestorage.googleapis.com/v0/b/bakery-23677.appspot.com/o/slider%2Fslider-3.jpg?alt=media&token=52470209-561b-4b60-9bbf-8844365fbb0b"  />
                    <Carousel.Caption className="ms-layer">
                        <h2 className="ms-layer">Pain De Campagne</h2>
                        <h3 className="ms-layer">Soft blend of natural yeast, rye flour, milled flour and sea salt</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-fluid' alt="escargot" src="https://firebasestorage.googleapis.com/v0/b/bakery-23677.appspot.com/o/slider%2Fslider-4.jpg?alt=media&token=cb66f5c4-6edd-483d-8d41-dc473e8d53f1"  />
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