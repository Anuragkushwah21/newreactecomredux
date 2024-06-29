import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

function Help() {
  return (
    <>
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>Help Center</h1>
          <p>Welcome to our help center. Here you can find answers to common questions.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Order Tracking</Card.Title>
              <Card.Text>
                Learn how to track your order and view its status.
              </Card.Text>
              <Card.Link href="#">Learn More</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Returns & Refunds</Card.Title>
              <Card.Text>
                Information on how to return items and request refunds.
              </Card.Text>
              <Card.Link href="#">Learn More</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Product FAQs</Card.Title>
              <Card.Text>
                Answers to frequently asked questions about our products.
              </Card.Text>
              <Card.Link href="#">Learn More</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Contact Us</Card.Title>
              <Card.Text>
                Need further assistance? Contact our support team.
              </Card.Text>
              <Card.Link href="#">Contact Support</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Help