const SocialLinks = ({ classN = '' }) => {
    return (
        <>
            <div className={`social-icon-container${classN}`}>
                <a href="https://www.facebook.com/" title='facebook'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/bakery-23677.appspot.com/o/icons%2Ffacebook.svg?alt=media&token=214da1b3-c353-4c25-833b-0fda7e9af20b' alt='facebook' />
                </a>
            </div>
            <div className={`social-icon-container${classN}`}>
                <a href="https://twitter.com/" title='twitter'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/bakery-23677.appspot.com/o/icons%2Ftwitter.svg?alt=media&token=2b59aa0f-d48f-4d8c-bb08-66ae15ec6bcd' alt='twitter' />
                </a>
            </div>
            <div className={`social-icon-container${classN}`}>
                <a href="https://www.instagram.com/" title='instagram'>
                    <img src='./images/icons/instagram.svg' alt='instagram' />
                </a>
            </div>
            <div className={`social-icon-container${classN}`}>
                <a href="https://www.youtube.com/" title='youtube'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/bakery-23677.appspot.com/o/icons%2Fyoutube.svg?alt=media&token=5bc2e2e0-5168-4085-bf7b-e55cc5ea50b9' alt='youtube' />
                </a>
            </div>
            <div className={`social-icon-container${classN}`}>
                <a href="https://www.linkedin.com/" title='linkedin'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/bakery-23677.appspot.com/o/icons%2Flinkedin.svg?alt=media&token=8aa21333-a32d-4834-b1fd-a98ab9b60366' alt='linkedin' />
                </a>
            </div>
        </>
    )
}

export default SocialLinks;