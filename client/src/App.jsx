import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ClassroomLayout from './components/ClassroomLayout.jsx';
import Toolbar from  './components/Toolbar.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
        <Container>
          <Col>
            <Row>
              <h1>Classroom Seating Chart</h1>
            </Row>
            <br />
            <br />
            <Row>
              <Toolbar />
            </Row>
            <Row>
              <ClassroomLayout />
            </Row>
          </Col>
        </Container>
    );
  }
}

export default App;