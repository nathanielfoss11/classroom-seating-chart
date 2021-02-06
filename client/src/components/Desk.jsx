import React from 'react';
import Draggable from 'react-draggable';

class Desk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.desk.name,
      rating: props.desk.rating
    }
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
    }
    return (
      <Draggable
      axis="x"
      handle=".handle"
      defaultPosition={{x: 0, y: 0}}
      position={null}
      grid={[25, 25]}
      scale={1}
      onStart={this.handleStart}
      onDrag={this.handleDrag}
      onStop={this.handleStop}>
        <div id='desk' className={color}>
          <p id='name' draggable="true">{this.state.name}</p>
        </div>
    </Draggable>
  )
  }
}


export default Desk;
