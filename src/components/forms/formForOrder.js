import React from 'react';
import { Formik, form } from 'formik';
import { Row, Col, Form } from 'react-bootstrap';
import * as yup from 'yup';
import './styles.css';

const validationSchema = yup.object().shape({
    firstName: yup.string()
        .min(2, 'Too short')
        .max(20, 'Too long')
        .required("Name is required"),
    lastName: yup.string(),
    adress: yup.string()
        .min(5, 'Too short')
        .required("Required"),
    phone: yup.string()
        .min(5, "Must be longer than 5 characters")
        .required("Phone is required"),
    email: yup.string()
        .matches(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i, 'Invalid email')
})

const FormForOrder = ({ setCustomer }) => {

    return (

        <Formik
            initialValues={{ firstName: "", lastName: "", phone: "", email: "", adress: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                setTimeout(() => {
                    //console.log(JSON.stringify(values, null, 2))
                    resetForm()
                    setSubmitting(false)
                }, 500)
                setCustomer(values)
            }}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (

                <Col lg={{ span: 8, offset: 2 }}
                    className='bakery-form'
                >
                    <form onSubmit={handleSubmit}>

                        <Row>
                            <Col lg={6}>
                                <Form.Group controlId="formfirstName">
                                    <Form.Label><h3>First name:</h3></Form.Label>
                                    <Form.Control
                                        type='text'
                                        name='firstName'
                                        placeholder='First name'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.firstName}
                                        className={touched.firstName && errors.firstName ? 'error-form' : null}
                                    />
                                    {touched.firstName && errors.firstName ? (
                                        <div className="error-form-message">{errors.firstName}</div>
                                    ) : null}
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group controlId="formLastName">
                                    <Form.Label><h3>Last name:</h3></Form.Label>
                                    <Form.Control
                                        type='text'
                                        name='lastName'
                                        placeholder='Last name'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lastName}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <Form.Group controlId="formPhone">
                                    <Form.Label><h3>Mobile phone:</h3></Form.Label>
                                    <Form.Control
                                        type='text'
                                        name='phone'
                                        placeholder='Mobile phone'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phone}
                                        className={touched.phone && errors.phone ? 'error-form' : null}
                                    />
                                    {touched.phone && errors.phone ? (
                                        <div className="error-form-message">{errors.phone}</div>
                                    ) : null}
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group controlId="formEmail">
                                    <Form.Label><h3>E-mail:</h3></Form.Label>
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
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formAdress">
                                    <Form.Label><h3>Adress:</h3></Form.Label>
                                    <Form.Control
                                        type='text'
                                        name='adress'
                                        placeholder='Adress'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.adress}
                                        className={touched.adress && errors.adress ? 'error-form' : null}
                                    />
                                    {touched.adress && errors.adress ? (
                                        <div className="error-form-message">{errors.adress}</div>
                                    ) : null}
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className='btn-order'>
                            <button type='submit'
                                disabled={isSubmitting}
                                className='btn-order'
                            >
                                <h3>Submit</h3>
                            </button>
                        </Row>

                    </form>
                </Col>
            )}
        </Formik>
    )
}

export default FormForOrder;
