import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

class Toolbar extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    let count = e.target.value;
    this.setState({count: count})
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({count: 0})
  }

  render() {
    return (
      <Row fluid>
        <Col>
          <h3>Toolbar</h3>
        </Col>
        <Col>
          Seats
          <input step={1} value={this.state.count} id='count' type='number' onChange={this.handleChange} />
        </Col>
        <Col>
          <Button onClick={this.handleClick}id='clearCount'>Clear</Button>
        </Col>
      </Row>
    );
  }
}

export default Toolbar;