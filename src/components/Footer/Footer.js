
import React from 'react';
import { Col, Container, Form, Button, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <Container fluid className="footer">
                <Row>
                    <Col>
                        <h5>DRIVEGA Driving School</h5>
                        <p>Getting a traffic ticket can be scary and stressful. Rarely, do we think about</p>
                    </Col>
                    <Col>
                        <h4>
                            Newsletter Signup

                        </h4>
                        <p>Enter your email address to get latest
                            updates and offers from us.</p>

                        <Form>
                            <input></input>
                            <input type="submit"></input>

                        </Form>

                    </Col>
                    <Col>
                        <h4>Social Links</h4>
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">Twitter</a>
                        </li>
                        <li>
                            <a href="#">Linkedin</a>
                        </li>
                    </Col>
                    <Col>
                        <h4>Helpline</h4>

                        <li>
                            Address:  Jhon Carrel Street, Sydney, Austrilia
                        </li>
                        <br></br>
                        <li>

                            Phone: +61 491 570 156

                        </li>
                        <br></br>
                        <li>
                            Mail: drivega.sydney@gmail.com

                        </li>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Footer;
// footer section