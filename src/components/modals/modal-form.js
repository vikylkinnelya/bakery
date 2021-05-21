import React, { Component } from 'react';
import { Modal, Form, Col, Row } from 'react-bootstrap'
import Formik from 'formik';
import yup from 'yup';

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    adress: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
})

const ModalForm = () => {


    return (
        <Formik
            validationSchema={schema}
            initialValues={{ firstName: '', lastName: '', adress: '', phone: '', email: '' }}
        >
            {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
                <Form nonValidate onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Col>
                            <Form.Group controlId="validationFormik01">
                                <Form.Control placeholder="First name"
                                    type='text'
                                    name='firstName'
                                    value={values.firstName}
                                    onChange={handleChange}
                                    isValid={touched.firstName && !errors.firstName}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Col>
                        <Form.Col>
                            <Form.Group controlId="validationFormik02">
                                <Form.Control placeholder="Last name"
                                    type='text'
                                    name='lastName'
                                    value={values.lastName}
                                    onChange={handleChange}
                                    isValid={touched.lastName && !errors.lastName}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Col>
                    </Form.Row>

                    <Form.Row>
                        <Form.Col>
                            <Form.Group controlId="validationFormik03">
                                <Form.Control placeholder="Phone number"
                                    type='text'
                                    name='phone'
                                    value={values.phone}
                                    onChange={handleChange}
                                    isValid={touched.phone && !errors.phone}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Col>

                        <Form.Col>
                            <Form.Group controlId="validationFormik04">
                                <Form.Control placeholder="email"
                                    type='text'
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    isValid={touched.email && !errors.email}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Col>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group controlId="validationFormik05">
                            <Form.Control placeholder="Adress"
                                type='text'
                                name='adress'
                                value={values.adress}
                                onChange={handleChange}
                                isValid={touched.adress && !errors.adress}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                </Form>
            )
            }


            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Please enter your data's </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row>
                        <Col>

                        </Col>
                        <Col>

                        </Col>
                    </Row>
                    <Row>
                        <Form.Control />
                    </Row>
                    <Row>
                        <Form.Control placeholder="Phone" />
                        <Form.Control placeholder="e-mail" />
                    </Row>



                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <button variant="primary">Confirm order</button>
                </Modal.Footer>
            </Modal.Dialog >

        </Formik >




    )
}

export default ModalForm;