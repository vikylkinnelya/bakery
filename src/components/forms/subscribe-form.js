import React from 'react';
import { Formik } from 'formik';
import { Row, Col, Form } from 'react-bootstrap';
import * as yup from 'yup';
import WithRestoService from '../hoc';
import './styles.css';

const SubscribeForm = ({ setSubscriberData }) => {

    const validationSchema = yup.object().shape({
        email: yup.string()
            .matches(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i, 'Invalid email')
    })

    return (
        <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                setTimeout(() => {
                    //console.log(JSON.stringify(values, null, 2))
                    resetForm()
                    setSubmitting(false)
                }, 500)
                setSubscriberData(values)
            }}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (

                <form onSubmit={handleSubmit}className='form-subscribe'>
                        <Col sm={8}>
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

                        <Col sm={4} className="submit-container">
                            <button
                                aria-label='submit subscribing'
                                type='submit'
                                disabled={isSubmitting}
                                className='btn-order'>
                                Subscribe
                            </button>
                        </Col>
                </form>
            )}

        </Formik >


    )
}


export default WithRestoService()(SubscribeForm);