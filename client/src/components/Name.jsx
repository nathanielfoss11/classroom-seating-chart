import React from 'react';

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.student.name,
      rating: props.student.rating
    }

  }
  
  render() {
    return(
      <div>
        <h3>{this.state.name}</h3>
      </div>
    )
  }

}

export default Name;