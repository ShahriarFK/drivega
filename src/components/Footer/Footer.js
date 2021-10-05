
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
                            Sign up here for more update

                        </h4>
                        <p>Get every update about driving vehicles</p>

                        <Form>
                            <input></input>
                            <input type="submit"></input>

                        </Form>

                    </Col>
                    <Col>
                        <h4>Social Links</h4>
                        <li>
                            <a className="angkor" href="https://facebook.com/">Facebook</a>
                        </li>
                        <li>
                            <a className="angkor" href="https://instragram.com/">Instagram</a>
                        </li>
                        <li>
                            <a className="angkor" href="https://twitter.com/">Twitter</a>
                        </li>
                        <li>
                            <a className="angkor" href="https://linkedin.com">Linkedin</a>
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