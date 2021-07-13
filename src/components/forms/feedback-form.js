import { useState, useCallback } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import {ResponseMessage} from '../responses';
import * as yup from 'yup';
import WithRestoService from '../hoc';
import { connect } from 'react-redux';
import { setLoading, setError } from '../../actions';


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


const FeedbackForm = ({ type, setLoading, setError, RestoService }) => {

    const [feedback, setFeedbackstate] = useState(false)

    const sendFeedback = useCallback((data) => {
        setLoading(true)
        RestoService.setFeedback(data)
            .catch(error => setError(error))
        setLoading(false)
        setFeedbackstate(true)
    }, [feedback])

    const section = {
        width: 4,
        colClassName: 'main-contact-form',
        formClassName: 'contact-form',
        namePlaseholder: 'Your name here',
        nameCol: undefined,
        emailPlaceholder: 'Your email here',
        emailCol: undefined,
        articleHeader: <h2>CONTACT US</h2>,
        articleTxt: <p>Our Company is the best, meet the creative team that never sleeps. Say something to us we will answer to you.</p>
    }

    const page = {
        width: 8,
        colClassName: 'bakery-form contact-form',
        formClassName: 'form-contact-alt',
        namePlaseholder: undefined,
        nameCol: <Col sm={5} className="input-description">
            <Form.Label>
                <i className="fa fa-user"></i>
                Name:
            </Form.Label>
        </Col>,
        emailCol: <Col sm={5} className="input-description">
            <Form.Label>
                <i className="fa fa-envelope"></i>
                Email:
            </Form.Label>
        </Col>,
        articleHeader: <h1>LEAVE US A MESSAGE</h1>,
        articleTxt: <p>Please fill in the form below and we’ll be in touch shorty. Thank you for visiting Our Bakery</p>
    }

    const typeOfPage = type === 'section' ? section : page

    return (

        <Col md={typeOfPage.width} className={typeOfPage.colClassName}>

            <div className="article-header">
                {typeOfPage.articleHeader}
                {!feedback && typeOfPage.articleTxt}
            </div>

            <Formik
                initialValues={{ name: "", email: "", subject: "", feedback: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting ,resetForm }) => {
                    setSubmitting(true); //нужно придумать что-нибудь для этого
                    setTimeout(() => {
                        resetForm()
                        sendFeedback(values)
                        setSubmitting(false)
                    }, 1500)
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <>
                        {feedback && <ResponseMessage
                            reason={'feedback'} />}

                        {!feedback && <>
                            <form onSubmit={handleSubmit} className={typeOfPage.formClassName}>
                                <Form.Group controlId="formNameFeedback">
                                    <Row>
                                        <Col>
                                            <Form.Control
                                                type='text'
                                                name='name'
                                                placeholder={typeOfPage.namePlaseholder}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                                className={touched.name && errors.name ? 'error-form' : null}
                                            />
                                        </Col>
                                        {typeOfPage.nameCol}
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
                                                placeholder={typeOfPage.emailPlaceholder}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                className={touched.email && errors.email ? 'error-form' : null}
                                            />
                                        </Col>
                                        {typeOfPage.emailCol}
                                    </Row>
                                    {touched.email && errors.email ? (
                                        <div className="error-form-message">{errors.email}</div>
                                    ) : null}

                                </Form.Group>

                                {type === 'page' &&
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
                                        
                                        name='feedback'
                                        placeholder={page === 'main' ? 'Your message here' : undefined}
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
                                    <Button
                                        aria-label='sent-message'
                                        type='submit'
                                        variant="light"
                                        disabled={isSubmitting}
                                        className='btn-order'
                                    >
                                        <h4>{isSubmitting ? 'Sending...' : 'Send message'}</h4>
                                    </Button>
                                </Row>

                            </form>
                        </>}
                    </>
                )}
            </Formik>
        </Col>
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




export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(FeedbackForm))