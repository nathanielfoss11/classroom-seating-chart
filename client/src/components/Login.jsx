import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ClassroomLayout from './ClassroomLayout.jsx';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      match: false,
      name: '',
      
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

  }

  render() {
    return (
        <Container>
          <Col>
            <Row>
              <h3>Login</h3>
            </Row>
            <Row>
              <label>Username</label>
              <input type='text' name='username' onChange={this.handleChange} value={this.state.username} />
            </Row>
            <Row>
              <label>Password</label>
              <input type='password' name='password' onChange={this.handleChange} value={this.state.password} />
            </Row>
            <Row>
              <input type='submit' onClick={this.handleClick} />
            </Row>
          </Col>
        </Container>
    );
  }
}

export default Login;