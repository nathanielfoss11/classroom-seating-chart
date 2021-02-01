import Desk from './Desk.jsx';
import React from 'react';

const AllDesks = (props) => {
  if(props.desks.length > 0) {
    return React.createElement(
      'div', 
      null, 
      props.desks.map(desk => 
        <Desk desk={desk} />,
      )
    )
  } else {
    console.log('null')
    return null;
  }
}

export default AllDesks;