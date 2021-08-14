import { Col, Form, Button, Spinner } from 'react-bootstrap';
import { useState, useCallback } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { ResponseMessage } from '../responses';
import { setError } from '../../actions';

const validationSchema = yup.object().shape({
    email: yup.string()
        .matches(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i, 'Invalid email')
})

const SubscribeForm = ({ RestoService, setError }) => {

    const [subscriber, setSubscriberState] = useState(false)

    const sendSubscribersData = useCallback((values) => {
        RestoService.setSubscriber(values)
            .catch(error => setError(error))
    }, [setError, RestoService])

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
                            setSubscriberState(true)
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
                                    {!isSubmitting &&
                                        <Button
                                            aria-label='subscribe'
                                            type='submit'
                                            variant="light"
                                            className='btn-order'
                                        >
                                            <h4>Subscribe</h4>
                                        </Button>
                                    }
                                    {isSubmitting &&
                                        <Button
                                            aria-label='subscribe'
                                            type='submit'
                                            disabled={true}
                                            className='btn-order'
                                        >
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            <h3>Subscribing...</h3>
                                        </Button>
                                    }


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
        error: state.error,
    }
}

const mapDispatchToProps = {
    setError
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(SubscribeForm))