import React, {Component} from 'react';
import Menu from '../menu/menu';

const Third = (props) => {
  return(
    <div>
      <Menu />
      First Name : <b> {props.firstName} </b> <br/>
      Last Name : <b> {props.lastName} </b> <br/>
    </div>
  )
}

export default Third;