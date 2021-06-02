import React from 'react';
import { Formik, form } from 'formik';
import { Row, Col, Form } from 'react-bootstrap';
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
        .min(3, 'Too short')
        .required("Subject is required"),
    feedback: yup.string()
        .min(10, "Must be longer than 10 characters")
        .max(500, 'Wow, its too long')
        .required("Feedback is required"),
})


const FormForFeedback = () => {

    return (

        <Formik
            initialValues={{ name: "", email: "", subject: "", feedback: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                setTimeout(() => {
                    //console.log(JSON.stringify(values, null, 2))
                    resetForm()
                    setSubmitting(false)
                }, 500)
                console.log(values)
            }}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (

                <Col lg={{ span: 8, offset: 2 }}
                    className='bakery-form'
                >
                    <div class="article-header">
                        <h1>Leave us a message</h1>
                    </div>

                    <form onSubmit={handleSubmit} class="form-contact-alt">
                        <Row>
                            <Form.Group controlId="formName">
                                <Row>
                                    <Col sm={7}>
                                        <Form.Control
                                            type='text'
                                            name='name'
                                            placeholder='Name'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            className={touched.name && errors.name ? 'error-form' : null}
                                        />
                                    </Col>
                                    <Col sm={5} className="input-description">
                                        <Form.Label>
                                            <i class="fa fa-user"></i>
                                        Name:
                                        </Form.Label>
                                    </Col>
                                    {touched.name && errors.name ? (
                                        <div className="error-form-message">{errors.name}</div>
                                    ) : null}
                                </Row>
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group controlId="formEmail">
                                <Row>
                                    <Col sm={7}>
                                        <Form.Control
                                            type='text'
                                            name='email'
                                            placeholder='Email'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            className={touched.email && errors.email ? 'error-form' : null}
                                        />
                                    </Col>
                                    <Col sm={5} className="input-description">
                                        <Form.Label>
                                            <i class="fa fa-envelope"></i>
                                        Email:
                                        </Form.Label>
                                    </Col>
                                    {touched.email && errors.email ? (
                                        <div className="error-form-message">{errors.email}</div>
                                    ) : null}
                                </Row>
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group controlId="formSubject">
                                <Row>
                                    <Col sm={7}>
                                        <Form.Control
                                            type='text'
                                            name='email'
                                            placeholder='Subject'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.subject}
                                            className={touched.subject && errors.subject ? 'error-form' : null}
                                        />
                                    </Col>
                                    <Col sm={5} className="input-description">
                                        <Form.Label>
                                            <i class="fa fa-file"></i>
                                        Subject:
                                        </Form.Label>
                                    </Col>
                                    {touched.subject && errors.subject ? (
                                        <div className="error-form-message">{errors.subject}</div>
                                    ) : null}
                                </Row>
                            </Form.Group>
                        </Row>

                        <Row className='btn-order'>
                            <button type='submit'
                                disabled={isSubmitting}
                                className='btn-order'
                            >
                                <h3>Sent message</h3>
                            </button>
                        </Row>

                    </form>
                </Col>
            )}
        </Formik>
    )
}

export default FormForFeedback;