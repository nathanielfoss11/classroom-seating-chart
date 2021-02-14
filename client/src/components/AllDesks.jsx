import Desk from './Desk.jsx';
import React from 'react';

const AllDesks = (props) => {
  if(props.desks.length > 0) {
    console.log(props.desks)
    return props.desks.map(desk => 
        <Desk handleDelete={props.handleDelete} desk={desk} />,
      )
  } else {
    console.log('null')
    return null;
  }
}

export default AllDesks;