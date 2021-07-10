import React, { useState, useCallback } from 'react';
import './styles.css';
import { Col, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { ResponseMessage } from '../responses';
import { setLoading, setError } from '../../actions';

const validationSchema = yup.object().shape({
    email: yup.string()
        .matches(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i, 'Invalid email')
})

const SubscribeForm = ({ setLoading, setError, RestoService }) => {

    const [subscriber, setSubscriberState] = useState(false)

    const sendSubscribersData = useCallback((data) => {
        setLoading(true)
        RestoService.setSubscriber(data)
            .catch(error => setError(error))
        setLoading(false)
        setSubscriberState(true)
    }, [subscriber])

    

    return (
        <>
            {subscriber &&
                <ResponseMessage reason={'subscribe'} />
            }

            {!subscriber && <>
                <h4>Newsletter</h4>
                <p>Give us your email, and we shall send regular updates for new stuff and events.</p>
                <Formik
                    initialValues={{ email: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setSubmitting(true);
                        setTimeout(() => {
                            resetForm()
                            sendSubscribersData(values)
                            setSubmitting(false) 
                        }, 1000) 
                    }}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <>
                            <form onSubmit={handleSubmit} className='form-subscribe row'>
                                <Col sm={12} lg={8}>
                                    <Form.Group controlId="formEmailSubscribe" className="email-container">
                                        <Form.Control
                                            type='text'
                                            name='email'
                                            placeholder='email'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            className={touched.email && errors.email ? 'error-form' : null}
                                        />
                                        {touched.email && errors.email ? (
                                            <div className="error-form-message">{errors.email}</div>
                                        ) : null}
                                    </Form.Group>
                                </Col>

                                <Col sm={6} lg={4} className="submit-container">
                                    <Button
                                        aria-label='subscribe'
                                        type='submit'
                                        variant="light"
                                        disabled={isSubmitting}
                                        className='btn-order'
                                    >
                                        <h4>{isSubmitting ? 'Subscribing...' : 'Subscribe'}</h4>
                                    </Button>
                                </Col>
                            </form>
                        </>
                    )}
                </Formik >
            </>}
        </>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
    }
}

const mapDispatchToProps = {
    setLoading,
    setError
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(SubscribeForm))