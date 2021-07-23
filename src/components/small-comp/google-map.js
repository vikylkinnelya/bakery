const GoogleMap = () => {
    return (
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
    )
}

export default GoogleMap;