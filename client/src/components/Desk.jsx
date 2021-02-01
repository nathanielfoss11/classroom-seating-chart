import { BiRectangle } from 'react-icons/bi';
import React from 'react';

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
      color = 'one'
    } else if (rating === '2') {
      color = 'two'
    } else if (rating === '3') {
      color = 'three'
    } else if (rating === '4') {
      color = 'four'
    } else if (rating === '5') {
      color = 'five'      
    }
    return (
    <h1 id='desk' className={color}>{this.state.name}</h1>
  )
  }
}


export default Desk;
