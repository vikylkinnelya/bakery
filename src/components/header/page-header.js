const PageHeader = ({ title, descr, id}) => {
    return (
        <section className='top-section'>
            <div className="offset-borders">
                <div className="full-header-container" id={`${id}`}>
                    <div className="full-header">
                        <div className="container">
                            <h1>{title}</h1>
                            <h3>{descr}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageHeader;;
