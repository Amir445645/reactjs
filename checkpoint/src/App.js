import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
          <Form>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label> Email Adress</Form.Label>
                  <Form.Control type="email" placeholder="Example@gmail.com" />
                  <Form.Text>
                    Trust us, we'll never share ur adress email
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label> password </Form.Label>
                  <Form.Control type="password" placeholder="password" />
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit" variant="primary">
              LOGIN
            </Button>
          </Form>
        </Container>
      </header>
    </div>
  );
}

export default App;
