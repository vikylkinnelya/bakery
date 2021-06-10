import React from 'react';
import './styles.css';

const ResponseMessage = ({ reason }) => {

    const subscribing = 'We will send regular updates for new stuff and events.'
    const feedback = 'Your feedback is important for us.'

    return (
        <div className='response-message'>
            <h4>
                Thank yor for {reason}!
            </h4>
            <h5>{reason === 'feedback' ? feedback : subscribing}</h5>

        </div>
    )
}

export default ResponseMessage;