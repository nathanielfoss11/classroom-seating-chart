import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AllDesks from './AllDesks.jsx';

class ClassroomLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      desks: [],
      name: '',
      rating: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    let name = e.target.name
    this.setState({[name]: e.target.value})
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.state)
    let obj = {
      name: this.state.name,
      rating: this.state.rating
    }
    let desks = this.state.desks;
    desks.push(obj);
    this.setState({desks: desks})
    this.setState({name: ''})
  }

  render() {
    return (
        <Container>
          <Row fluid>
            <Col>
              <h3>Toolbar</h3>
            </Col>
            <Col>
              Name
              <input name='name' step={1} value={this.state.name} id='count' type='text' onChange={this.handleChange} />
              Behavior
              <select name='rating' value={this.state.rating} onChange={this.handleChange}>
                <option value='0'>Select</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
              <input type='submit' onClick={this.handleClick} />
            </Col>
            <Col xl={1}>
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