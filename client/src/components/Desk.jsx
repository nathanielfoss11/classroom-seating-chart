import React from 'react';
import Draggable from 'react-draggable';
import ReactDOM from 'react-dom'

class Desk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDrags: 0,
      name: props.desk.name,
      rating: props.desk.rating
    }
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = props.handleDelete.bind(this);
  }

  handleClick() {
    this.handleDelete(this.state.name)
  }

  onStart() {
    this.setState({activeDrage: ++this.state.activeDrags})
  }
  onStop() {
    this.setState({activeDrage: --this.state.activeDrags})
  }
  render() {
    let color = '';
    let rating = this.state.rating;
    if(rating === '1') {
      color = 'one';
    } else if (rating === '2') {
      color = 'two';
    } else if (rating === '3') {
      color = 'three';
    } else if (rating === '4') {
      color = 'four';
    } else if (rating === '5') {
      color = 'five';
    } else if (rating === '6') {
      color = 'six';
    }
    return (
      <div id={this.state.name}>
        <Draggable
        onStart={this.onStart}
        onStop={this.onStop}>
          <div id='desk' className={color}>
            {this.state.name}
          </div>
        </Draggable>
      </div>
  )
  }
}


export default Desk;
