import React from 'react';
import { Card, Col, Container, Row, CardGroup } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './Tutor.css'
const Tutor = () => {
  return (
    <div>
      <h1 className="tutor-heading">Our Insturctors <br></br> Panel </h1>

      <Container fluid className="bg-tutor">
        <Row>
          <Col>
            <CardGroup>
              <Card className="mb-5">
                <Card.Img variant="top" className="image" src="https://media.istockphoto.com/photos/young-man-standing-confidently-picture-id973481352?k=20&m=973481352&s=612x612&w=0&h=QvBVfIQezrqk3jwtrItEghWF9sMD23saG3Gmj5buG44=" />
                <Card.Body>
                  <Card.Title><h2>Rafael</h2></Card.Title>
                  <Card.Text className="tutor-details">
                    Expert in Highway Driving
                  </Card.Text>
                </Card.Body>

              </Card>

            </CardGroup>
          </Col>
          <Col>
            <CardGroup>
              <Card>
                <Card.Img variant="top" className="image" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                <Card.Body>
                  <Card.Title><h2>Rebon</h2></Card.Title>
                  <Card.Text className="tutor-details">
                    Expert in International Driving
                  </Card.Text>
                </Card.Body>

              </Card>

            </CardGroup></Col>
          <Col>  <CardGroup>
            <Card>
              <Card.Img variant="top" className="image" src="https://deathofhemingway.com/wp-content/uploads/2020/12/istockphoto-1045886560-612x612-1.jpg" />
              <Card.Body>
                <Card.Title><h2>Borris</h2></Card.Title>
                <Card.Text className="tutor-details">
                  Expert in Safe & Defensive Driving
                </Card.Text>
              </Card.Body>

            </Card>

          </CardGroup></Col>
        </Row>
        <Row>
          <Col>  <CardGroup>
            <Card>
              <Card.Img variant="top" className="image" src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" />
              <Card.Body>
                <Card.Title><h2>George</h2></Card.Title>
                <Card.Text className="tutor-details">
                  Expert in Speedy Driving
                </Card.Text>
              </Card.Body>

            </Card>

          </CardGroup></Col>
          <Col>  <CardGroup>
            <Card>
              <Card.Img variant="top" className="image" src="https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFwcHklMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
              <Card.Body>
                <Card.Title><h2>Fredrik</h2></Card.Title>
                <Card.Text className="tutor-details">
                  Expert in Sudden Break, disciplined Driving & Horns
                </Card.Text>
              </Card.Body>

            </Card>

          </CardGroup></Col>
          <Col>  <CardGroup>
            <Card>
              <Card.Img variant="top" className="image" src="https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZHNvbWUlMjBibGFjayUyMG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
              <Card.Body>
                <Card.Title><h2>Russell</h2></Card.Title>
                <Card.Text className="tutor-details">
                  Expert in Automatic Car Driving
                </Card.Text>
              </Card.Body>

            </Card>

          </CardGroup>
          </Col>
        </Row>
      </Container>



      <Footer></Footer>
    </div>
  );
};

export default Tutor;

// instructor section