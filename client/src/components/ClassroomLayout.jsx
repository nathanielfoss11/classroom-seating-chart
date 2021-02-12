import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AllDesks from './AllDesks.jsx';
import ReactDOM from 'react-dom';

class ClassroomLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      desks: [{name: 'Your Desk', rating: '6'}],
      name: '',
      rating: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    let name = e.target.name
    this.setState({[name]: e.target.value})
  }

  handleDelete(name) {
    console.log(name)
    let desks = this.state.desks
    for(let i = 0; i < desks.length; i++) {
      console.log(desks[i]['name'])
      if(desks[i]['name'] === name) {
        desks.splice(i, 1);
        this.setState({desks: desks});
        break;
      }
    }
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
              <Row>
                <h3>Name</h3>
                <input name='name' step={1} value={this.state.name} id='count' type='text' onChange={this.handleChange} />
                <h3>Behavior</h3>
                <select name='rating' value={this.state.rating} onChange={this.handleChange}>
                  <option value='0'>Select</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
                <input type='submit' onClick={this.handleClick} />
              </Row>
            </Col>
          </Row>
          <Row id='classroom-layout'>
            <AllDesks handleDelete={this.handleDelete = this.handleDelete.bind(this)}desks={this.state.desks}/>
          </Row>

        </Container>
    );
  }
}

export default ClassroomLayout;