import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BiRectangle } from 'react-icons/bi';
import AllDesks from './AllDesks.jsx';


class ClassroomLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      desks: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    let newDesk= [];
    let count = e.target.value;
    this.setState({count: count})
    if(this.state.desks.length > count) {
      let desks = this.state.desks
      desks = desks.pop()
      this.setState({desks: desks})
    } else {
      let desks = this.state.desks
      desks.push(newDesk)
      console.log(desks)
      this.setState({desks: desks})
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({count: 0})
  }

  render() {
    return (
        <Container>
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
          <Row id='classroom-layout'>
            {this.state.count}
            <AllDesks desks={this.state.desks}/>
          </Row>

        </Container>
    );
  }
}

export default ClassroomLayout;