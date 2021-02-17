import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AllDesks from './AllDesks.jsx';
import ClassList from './ClassList.jsx';
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
    let newDesks = this.state.desks
    for(let i = 0; i < newDesks.length; i++) {
      console.log(newDesks[i]['name'])
      if(newDesks[i]['name'] === name) {
        newDesks.splice(i, 1);
        console.log(newDesks)
        this.setState({desks: newDesks});
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
          <Row>
            <Col>
              <Row>
                <Col xs={3}>
                  <h3>Add Students:</h3>
                </Col>
                <Col>
                  <Row id='toolbar'>
                    <Col>
                    <Row id='nameRow'>
                    <h4>Name &nbsp;</h4>
                    <input name='name' step={1} value={this.state.name} id='count' type='text' onChange={this.handleChange} />                   
                    </Row>
                    </Col>
                    <Col>
                    <Row>
                    <h4>Behavior &nbsp;</h4>
                    <select name='rating' id='rating' value={this.state.rating} onChange={this.handleChange}>
                      <option value='0'>Select</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                    </select>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <input type='submit' id='rating' onClick={this.handleClick} />
                    </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row id='classroom-layout'>
                <AllDesks desks={this.state.desks}/>
              </Row>
            </Col>
            <Col xl={3}>
              <Row>
                <h3>Class List</h3>
              </Row>
              <Row>
                <Col>
                  <ClassList classArray={this.state.desks} handleDelete={
    this.handleDelete = this.handleDelete.bind(this)}/>            
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default ClassroomLayout;