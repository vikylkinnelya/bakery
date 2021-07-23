import { FeedbackForm } from '../forms';
import React, { lazy } from 'react';
const GoogleMap = lazy(() => import('../small-comp'))

const ContactSection = () => {
    return (
        <section id="contact-section">
            <div className="section-content">
                <FeedbackForm type={'section'} />
                <GoogleMap />
            </div>
        </section>
    )
}

export default ContactSection