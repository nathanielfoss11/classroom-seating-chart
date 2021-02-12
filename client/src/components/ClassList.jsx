import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AllDesks from './AllDesks.jsx';
import ReactDOM from 'react-dom';

class ClassList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classArray: props.classArray
    }
    this.listBuilder = this.listBuilder.bind(this);
    this.listBuilder();
  }

  listBuilder() {
    let list = this.state.classArray;
    console.log(list)
    for(let i = 0; i < list.length - 1; i++) {
      let name = `<p> ${list[i]['name']} </p>`;
    }
  }

  render() {
    return (
      <div className='list'>
      </div>
    )
  }
}

export default ClassList;