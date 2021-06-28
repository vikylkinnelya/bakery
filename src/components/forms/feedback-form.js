import React from 'react';
import { Formik, form } from 'formik';
import { Row, Col, Form } from 'react-bootstrap';
import ResponseMessage from '../response-message';
import * as yup from 'yup';
import './styles.css';

const validationSchema = yup.object().shape({
    name: yup.string()
        .min(2, 'Too short')
        .max(20, 'Too long')
        .required("Name is required"),
    email: yup.string()
        .min(5, "Must be longer than 5 characters")
        .matches(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i),
    subject: yup.string()
        .min(3, 'Too short'),
    feedback: yup.string()
        .min(10, "Must be longer than 10 characters")
        .max(500, 'Wow, its too long')
        .required("Feedback is required"),
})


const FeedbackForm = ({ feedback, setFeedbackData, setResponseMessage, page, reason }) => {

    const className = page === 'main' ? 'contact-form' : 'form-contact-alt'

    return (

        <Formik
            initialValues={{ name: "", email: "", subject: "", feedback: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true); //нужно придумать что-нибудь для этого
                setTimeout(() => {
                    //console.log(JSON.stringify(values, null, 2))
                    resetForm()
                    setSubmitting(false)
                }, 1500)
                setFeedbackData(values)
                setResponseMessage(true)
            }}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <>
                    {feedback && <ResponseMessage
                        reason={reason}
                    />}

                    {!feedback && <>
                        <form onSubmit={handleSubmit} className={className}>
                            <Form.Group controlId="formNameFeedback">
                                <Row>
                                    <Col>
                                        <Form.Control
                                            type='text'
                                            name='name'
                                            placeholder={page === 'main' && 'Your name here'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            className={touched.name && errors.name ? 'error-form' : null}
                                        />
                                    </Col>
                                    {page !== 'main' &&
                                        <Col sm={5} className="input-description">
                                            <Form.Label>
                                                <i className="fa fa-user"></i>
                                                Name:
                                            </Form.Label>
                                        </Col>
                                    }
                                </Row>
                                {touched.name && errors.name ? (
                                    <div className="error-form-message">{errors.name}</div>
                                ) : null}
                            </Form.Group>

                            <Form.Group controlId="formEmailFeedback">
                                <Row>
                                    <Col>
                                        <Form.Control
                                            type='text'
                                            name='email'
                                            placeholder={page === 'main' && 'Your email here'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            className={touched.email && errors.email ? 'error-form' : null}
                                        />
                                    </Col>
                                    {page !== 'main' &&
                                        <Col sm={5} className="input-description">
                                            <Form.Label>
                                                <i className="fa fa-envelope"></i>
                                                Email:
                                            </Form.Label>
                                        </Col>
                                    }
                                </Row>
                                {touched.email && errors.email ? (
                                    <div className="error-form-message">{errors.email}</div>
                                ) : null}

                            </Form.Group>

                            {page === 'contact' &&
                                <Form.Group controlId="formSubjectFeedback">
                                    <Row>
                                        <Col sm={7}>
                                            <Form.Control
                                                type='text'
                                                name='subject'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.subject}
                                                className={touched.subject && errors.subject ? 'error-form' : null}
                                            />
                                        </Col>
                                        <Col sm={5} className="input-description">
                                            <Form.Label>
                                                <i className="fa fa-file"></i>
                                                Subject:
                                            </Form.Label>
                                        </Col>
                                    </Row>
                                    {touched.subject && errors.subject ? (
                                        <div className="error-form-message">{errors.subject}</div>
                                    ) : null}

                                </Form.Group>
                            }

                            <Form.Group controlId="formFeedback">
                                <Form.Control as="textarea" rows={3}
                                    type='text'
                                    name='feedback'
                                    placeholder={page === 'main' && 'Your message here'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.feedback}
                                    className={touched.feedback && errors.feedback ? 'error-form' : null}
                                />
                                {touched.feedback && errors.feedback ? (
                                    <div className="error-form-message">{errors.feedback}</div>
                                ) : null}

                            </Form.Group>
                            <Row className='btn-order'>
                                <button
                                    aria-label='sent-message'
                                    type='submit'
                                    disabled={isSubmitting}
                                    className='btn-order'
                                >
                                    <h4>Sent message</h4>
                                </button>
                            </Row>

                        </form>
                    </>}
                </>
            )}
        </Formik>
    )
}

export default FeedbackForm;