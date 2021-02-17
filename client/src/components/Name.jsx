import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.student.name,
      rating: props.student.rating
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = props.handleDelete.bind(this);
  }

  handleClick() {
    this.handleDelete(this.state.name);
  }
  
  render() {
    return(
      <Col id='className'>
        <Row>
          <Col>
            <h5>{this.state.name}</h5> 
          </Col>
          <Col>
            <Button id='delete' size='sm' onClick={this.handleClick}>Delete</Button>      
          </Col>
        </Row>
      </Col>
    )
  }

}

export default Name;