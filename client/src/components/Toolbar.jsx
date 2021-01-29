import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

class Toolbar extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <Row fluid>
        <Col>
          <h3>Toolbar</h3>
        </Col>
        <Col>
          <p>Seats</p>
        </Col>
        <Col>
          <input type='number' />
        </Col>
        <Col>
          <Button>Clear</Button>
        </Col>
      </Row>
    );
  }
}

export default Toolbar;