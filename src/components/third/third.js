import React, {Component} from 'react';

const Third = (props) => {
  return(
    <div>
      First Name : <b> {props.firstName} </b> <br/>
      Last Name : <b> {props.lastName} </b> <br/>
    </div>
  )
}

export default Third;