const SocialLinks = ({ classN = '' }) => {
    return (
        <>
            <div className={`social-icon-container${classN}`}>
                <a href="https://www.facebook.com/" title='facebook'>
                    <img src='./images/icons/facebook.svg' alt='facebook' />
                </a>
            </div>
            <div className={`social-icon-container${classN}`}>
                <a href="https://twitter.com/" title='twitter'>
                    <img src='./images/icons/twitter.svg' alt='twitter' />
                </a>
            </div>
            <div className={`social-icon-container${classN}`}>
                <a href="https://www.instagram.com/" title='instagram'>
                    <img src='./images/icons/instagram.svg' alt='instagram' />
                </a>
            </div>
            <div className={`social-icon-container${classN}`}>
                <a href="https://www.youtube.com/" title='youtube'>
                    <img src='./images/icons/youtube.svg' alt='youtube' />
                </a>
            </div>
            <div className={`social-icon-container${classN}`}>
                <a href="https://www.linkedin.com/" title='linkedin'>
                    <img src='./images/icons/linkedin.svg' alt='linkedin' />
                </a>
            </div>
        </>
    )
}

export default SocialLinks;