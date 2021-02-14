import React from 'react';
import Name from './Name.jsx'

const ClassList = (props) => {
  if(props.classArray.length > 0) {
    console.log(props.classArray)
    return props.classArray.map(name => 
        <Name student={name} />,
      )
  } else {
    console.log('null')
    return null;
  }
}

export default ClassList;